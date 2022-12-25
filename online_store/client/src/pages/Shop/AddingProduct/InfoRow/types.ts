export interface InfoRowProps {
  id: number;
  getInfo: (infoRow: {
    createdAt: number;
    title: string;
    description: string;
  }) => void;
  onClickDelete: (id: number) => void;
}
