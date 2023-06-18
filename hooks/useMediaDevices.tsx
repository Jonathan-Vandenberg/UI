import { useEffect, useState } from "react";

import on from "../app/utilities/on";
import off from "../app/utilities/off";

import { defaultConstraints } from "../misc/default-constraints";

//

const useMediaDevicesHook = (constraints?: MediaTrackConstraints) => {
  const [state, setState] = useState<MediaTrackSettings[]>([]);

  useEffect(() => {
    let mounted = true;

    let newConstraints: MediaStreamConstraints = {
      audio: false,
      video: constraints ?? defaultConstraints,
    };

    const onChange = () => {
      navigator.mediaDevices
        .getUserMedia(newConstraints)
        .then((stream) => {
          let settings: Array<MediaTrackSettings> = [];

          stream.getVideoTracks().forEach((track) => {
            settings.push(track.getSettings());
          });

          setState(settings);
        })
        .catch((error) => console.log(error));
    };

    on(navigator.mediaDevices, "devicechange", onChange);
    onChange();

    return () => {
      mounted = false;
      off(navigator.mediaDevices, "devicechange", onChange);
    };
  }, []);

  return state;
};

const useMediaDevicesMock = () => {
  const devices: MediaTrackSettings[] = [];

  return devices;
};

export const useMediaDevices =
  typeof navigator !== "undefined" && !!navigator.mediaDevices
    ? useMediaDevicesHook
    : useMediaDevicesMock;
