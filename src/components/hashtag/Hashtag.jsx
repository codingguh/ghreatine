import { Button } from "@mantine/core";

const Hashtag = () => {
  const hashtags = [
    { id: 1, label: "#redux" },
    { id: 2, label: "#perkenalan" },
    // Add more hashtags as needed
  ];
  return (
    <div className="px-8">
      {hashtags.map((hashtag) => (
        <Button
          key={hashtag.id}
          variant="outline"
          color="black"
          className="mr-3"
        >
          {hashtag.label}
        </Button>
      ))}
    </div>
  );
};

export default Hashtag;
