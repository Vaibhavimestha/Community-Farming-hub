
import InfoPage from "@/components/InfoPage";

export default function Communities() {
  return (
    <InfoPage
      eyebrow="Community Network"
      title="Stronger Farming Communities Start Here"
      description="Discover groups that encourage knowledge sharing, seed exchange, sustainable agriculture and community participation."
      image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000&q=80"
      sections={[
        {
          title: "Community Farming Groups",
          description:
            "Connect with local farmers and participate in group farming activities."
        },
        {
          title: "Seed Exchange",
          description:
            "Learn about exchanging traditional seeds and agricultural resources."
        },
        {
          title: "Shared Equipment",
          description:
            "Encourage farmers to share tractors, tools and other equipment for a daily rental charge."
        },
        {
          title: "Knowledge Sharing",
          description:
            "Exchange useful information about organic farming, crop management and composting."
        }
      ]}
    />
  );
}
