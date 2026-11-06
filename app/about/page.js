import InfoPage from "@/components/InfoPage";

export default function About() {
  return (
    <InfoPage
      eyebrow="Who We Are"
      title="Growing Together for a Better Agricultural Future"
      description="GrowTogether is a community farming hub designed to connect local farmers, buyers and agricultural communities."
      image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000"
      sections={[
        {
          title: "Our Mission",
          description: "To empower farmers through better visibility, direct customer connections and shared agricultural resources."
        },
        {
          title: "Our Vision",
          description: "To create a connected agricultural ecosystem where farmers and communities grow together."
        },
        {
          title: "Our Approach",
          description: "We bring together produce selling, equipment sharing, community activities and farming knowledge."
        }
      ]}
    />
  );
}