import InfoPage from "@/components/InfoPage";

export default function HowItWorks() {
  return (
    <InfoPage
      eyebrow="Simple and Easy"
      title="A Better Way to Connect Agriculture"
      description="Our platform makes it easy for farmers to showcase their produce and buyers to discover local agricultural products."
      image="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?w=1000"
      sections={[
        {
          title: "1. Create an Account",
          description: "Choose whether you want to join as a farmer or buyer."
        },
        {
          title: "2. Connect and Discover",
          description: "Farmers list their products while buyers explore fresh produce."
        },
        {
          title: "3. Manage Products and Orders",
          description: "Farmers manage listings and demo orders, while buyers manage their cart."
        },
        {
          title: "4. Grow Together",
          description: "Connect with local communities and share agricultural resources."
        }
      ]}
    />
  );
}