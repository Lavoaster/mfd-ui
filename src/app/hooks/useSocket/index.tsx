import React, { useContext, useEffect, useState } from 'react';
import io from "socket.io-client";

type Socket = (typeof io)["Socket"];

const Context = React.createContext<Socket | null>(null);

export interface SocketProviderProps {
  url: string;
  opts?: Socket["io"]["opts"];
  children: (socket: Socket) => React.ReactNode;
}

export function SocketProvider({ url, opts, children }: SocketProviderProps) {
  const [socket, setSocket] = useState(() => {
    return io(url, opts);
  });

  return (
    <Context.Provider value={socket}>
      {children(socket)}
    </Context.Provider>
  );
}

export const SocketConsumer = Context.Consumer;

export function useSocket(eventKey?: string): [any, Socket] {
  const socket = useContext(Context)!;

  if (eventKey) {
    const [value, setValue] = useState<any>(null);

    useEffect(() => {
      socket.on(eventKey, setValue);
    }, []);

    return [value, socket];
  }

  return [null, socket];
}
