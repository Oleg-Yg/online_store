import React from "react";

export interface ModalProps {
  children: React.ReactNode;
  title?: string;
  onOkClick?: () => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  showButtons?: boolean;
  okLabel?: string;
  cancelLabel?: string;
}
