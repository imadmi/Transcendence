import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { io, Socket } from "socket.io-client";
import Cookies from "universal-cookie";

export type User = {
  intraId: string;
  fullname: string;
  login: string;
  email: string;
  Avatar: string;
  isRegistred: boolean;
  isTfaEnabled: boolean;
  created_at: Date;
  updated_at: Date;
  status: string;
};

type AppContextProps = {
  isDivVisible: boolean;
  toggleDivVisibility: () => void;
  setDivVisible: (isDivVisible: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  isSidebarVisible: boolean;
  setisSidebarVisible: (isSidebarVisible: boolean) => void;
  toggleSidebarVisibleVisibility: () => void;
  // friendshipStatus: "NOTFRIENDS" | "PENDING" | "ACCEPTED" | "BLOCKED";
  // setStatus: (
  //   status: "NOTFRIENDS" | "PENDING" | "ACCEPTED" | "BLOCKED"
  // ) => void;
};

const AppContext = createContext<AppContextProps | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isDivVisible, setDivVisible] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isSidebarVisible, setisSidebarVisible] = useState<boolean>(true);
  // const [friendshipStatus, setStatus] = useState<
  //   "NOTFRIENDS" | "PENDING" | "ACCEPTED" | "BLOCKED"
  // >("NOTFRIENDS");

  const toggleDivVisibility = () => {
    setDivVisible((prev) => !prev);
  };

  const toggleSidebarVisibleVisibility = () => {
    setisSidebarVisible((prev) => !prev);
  };

  const contextValue: AppContextProps = {
    isDivVisible,
    toggleDivVisibility,
    setDivVisible,
    user,
    setUser,
    isSidebarVisible,
    setisSidebarVisible,
    toggleSidebarVisibleVisibility,
    // friendshipStatus,
    // setStatus,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
