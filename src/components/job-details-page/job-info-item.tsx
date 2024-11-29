const JobInfoItem = ({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-bgColour p-2 rounded-full">
        <Icon className="text-primary size-5" />
      </div>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-[12px] text-muted-foreground">{subtitle}</div>
      </div>
    </div>
  );
};

export default JobInfoItem;
