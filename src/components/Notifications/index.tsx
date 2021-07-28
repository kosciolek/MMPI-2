import styled from "@emotion/styled";
import { useState } from "react";
import { useTransition, animated } from "react-spring";
import { zIndex } from "../../const";
import { useIds } from "../../hooks/id";
import { media } from "../../hooks/media";
import { useReadNotifications } from "../../hooks/notifications";
import { $callback } from "../../hooks/utils";
import { Notification } from "./Notification";
import { NotificationWithId } from "./types";

const TIMEOUT = 6000;

export const Notifications = () => {
  const [shown, setShown] = useState<NotificationWithId[]>([]);

  const cancel = (id: string) =>
    setShown((prev) => prev.filter((notif) => notif.id !== id));

  const makeId = useIds();
  useReadNotifications(
    $callback(({ content, title, type = "info" }) => {
      const id = makeId();
      setShown((prev) => [{ content, title, type, id }, ...prev]);

      /* TODO - Should be cancelled on unmount or manual cancellation,
       *   but it doesn't matter much anyway. */
      setTimeout(() => {
        cancel(id);
      }, TIMEOUT);
    })
  );

  const [heightMap] = useState(() => new Map<string, number>());

  const transition = useTransition(shown, {
    keys: (item) => item.id,
    from: { height: 0, marginTop: 0, opacity: 0 },
    enter:
      ({ id }) =>
      async (next) => {
        await next({
          height: heightMap.get(id),
          marginTop: 16,
          opacity: 1,
        });
      },
    leave: { height: 0, marginTop: 0, opacity: 0 },
    config: {
      tension: 700,
      mass: 0.5,
      friction: 60,
    },
  });

  return (
    <Root>
      {transition((style, notif) => (
        <Animated style={style}>
          <Notification
            ref={(elem) => {
              if (elem) {
                heightMap.set(notif.id, elem.getBoundingClientRect().height);
              } else heightMap.delete(notif.id);
            }}
            key={notif.id}
            onCancel={() => cancel(notif.id)}
            {...notif}
          />
        </Animated>
      ))}
    </Root>
  );
};

export const Root = styled.div`
  position: fixed;
  top: 16px;
  bottom: 16px;
  right: 16px;
  pointer-events: none;
  display: flex;
  flex-direction: column-reverse;
  padding: 16px;
  z-index: ${zIndex.notificationLayer};

  width: calc(100% - 32px);

  ${media.sm} {
    width: 450px;
  }
`;
export const Animated = styled(animated.div)`
  flex-shrink: 0;
  overflow-y: hidden;
`;
