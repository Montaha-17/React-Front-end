
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Table from "@/components/ui/Table";

import aiImage from "@/assets/AI.png";
import cysImage from "@/assets/CYS.png";

export const Home = () => {
  function handleClick() {
    alert("Button Clicked!");
  }
  const columns = ["Product", "Category", "Price", "Status"];

const data = [
  {
    Product: "MacBook Air M3",
    Category: "Laptops",
    Price: "$1,099",
    Status: "In Stock",
  },
  {
    Product: "iPhone 15",
    Category: "Smartphones",
    Price: "$799",
    Status: "In Stock",
  },
  {
    Product: "Sony WH-1000XM5",
    Category: "Headphones",
    Price: "$349",
    Status: "Out of Stock",
  },
  {
    Product: "iPad Air",
    Category: "Tablets",
    Price: "$599",
    Status: "In Stock",
  },
];

  return (
    <>
      {/* Buttons Section */}
      <section className="mt-8">
        <h1 className="text-3xl font-bold text-center text-foreground">
            Button Component
        </h1>
      <div className="flex flex-wrap justify-center mt-8 gap-3">
        <Button
          text="Click Me"
          variant="primary"
          onClick={handleClick}
        />

        <Button
          text="Click Me"
          variant="secondary"
          onClick={handleClick}
        />

        <Button
          text="Click Me"
          variant="danger"
          disabled={true}
          onClick={handleClick}
        />
      </div>
      </section>

      {/* Cards Section */}
      <section className="mt-8">
        <h1 className="text-3xl font-bold text-center text-foreground">
            Card Component
            </h1>
      <div className="mt-8 grid grid-cols-1 gap-6 items-start md:grid-cols-2 lg:grid-cols-3">
        
        <Card
          title="Cloud Computing"
          description="On-demand delivery of IT resources like storage, databases, and servers over the internet with flexible pay-as-you-go pricing."
        />

        <Card
          title="Cybersecurity Operations"
          description="Proactive defense systems designed to shield critical networks, servers, and sensitive data from modern cyber threats and unauthorized access."
          image={cysImage}
        />

        <Card
          title="Generative AI"
          description="Advanced machine learning models capable of creating new text, realistic images, and clean code by learning patterns from massive datasets."
          image={aiImage}
        >
            {/* children */}
          <Button
            text="Learn More"
            variant="secondary"
            onClick={handleClick}
          />
        </Card>
      </div>
      </section>

        {/* Table Component */}
      <section className="mt-8">
        <h1 className="text-3xl font-bold text-center text-foreground">
            Table Component
            </h1>
      <div className="mt-8">
        <Table
        columns={columns}
        data={data}
        striped
        />
      </div>
      </section>
    </>
  );
};
