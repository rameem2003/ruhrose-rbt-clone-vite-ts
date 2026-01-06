import design1 from "../assets/design1.jpg";
import small8 from "../assets/small8.jpg";
import small11 from "../assets/small11.jpg";
// import logistic from "../assets/logistic.jpg";
import small4 from "../assets/small4.jpg";
import small7 from "../assets/small7.jpg";
import small5 from "../assets/small5.jpg";

export const services = [
  {
    label: "Design",
    image: [design1] as string[],
    description: `At Rivo Canada Inc., we take a fully hands-on approach, managing every stage of the supply chain—from the first idea to final delivery. Our in-house creative department is available to all clients, offering support whenever needed. \n Whether you arrive with a clear creative direction or require help shaping the vision, our creative team works closely with you through brainstorming, design development, and prototyping to bring concepts to life. We also design tailored supply chain solutions that balance cost, quality, volume, and timelines to help brands reach the market faster and smarter. \n Our fashion and graphic designers think beyond boundaries, working across traditional and digital mediums to deliver fresh, innovative design solutions. No matter the size of your brand, every collection requires thoughtful planning and meticulous execution. We can support specific phases or manage the full process—either way, our involvement will feel like an extension of your own team. \n Even if you’re starting with nothing more than an idea, our experienced professionals will help transform it into a market-ready product while streamlining production and improving time-to-market. \n From concept to creation, Rivo Canada Inc. is committed to helping you build a brand with confidence, creativity, and clarity.`,
  },
  {
    label: "Manufacturing",
    image: [small8] as string[],
    description: ` Rivo Canada Inc. stands out by offering dependable, sustainable, and ethically driven garment manufacturing and production solutions. \n We have trusted team members positioned close to key garment factories, enabling us to source across multiple locations and secure competitive pricing from several manufacturers simultaneously. \n Our skilled team is dedicated to helping businesses connect with leading manufacturers in Bangladesh. We maintain stringent quality control and merchandising oversight at every stage of production to ensure all client needs are fully met. By having our team on the ground near factories and suppliers, we monitor the process before, during, and after production, ensuring high standards and client expectations are consistently achieved.`,
  },

  {
    label: "Sourcing",
    image: [small11] as string[],
    description: `With dedicated teams based in Bangladesh, Rivo Canada Inc. delivers a seamless, professional, and transparent sourcing experience designed to guide clients confidently through every stage of the procurement journey. \n We help brands find the right partners by sourcing trusted suppliers, high-quality fabrics, accessories and finished products, while also conducting in-depth research to support strong product development and production planning. \n To ensure clarity and confidence in decision-making, our team provides detailed comparison reports covering key factors such as cost, logistics, customs requirements, lead times, and overall feasibility—tailored to your production and business goals. \nWe believe a manufacturing partner should be much more than a name on a website. That’s why every supplier we work with has been personally evaluated and approved by our team on the ground, ensuring quality, reliability, and ethical practices.`,
    subService: {
      label: "Our sourcing services include:",
      list: [
        "Understanding your requirements and crafting a tailored sourcing strategy",
        "Identifying reliable suppliers that meet price, quality, and delivery expectations",
        "Reviewing technical details and product specifications",
        "Preparing and issuing RFQ (Request for Quotation) packages",
        "Negotiating directly with factories—eliminating middlemen to secure the best value",
        "Securing essential documents and agreements, including NDAs",
        "Delivering comprehensive product, supplier, and quality assessment reports",
      ],
    },
  },
  {
    label: "Logistics & Transportation Service",
    image: [small4] as string[],
    description: `Rivo Canada Inc. provides end-to-end logistics solutions designed to make global shipping smooth, reliable, and stress-free. From label stock management and packing to transportation and warehous  ing, we ensure your products move efficiently through every stage of the supply chain. We also offer consolidated shipping options to simplify freight management and reduce costs. \n Every shipment is packed according to your exact requirements, ensuring products arrive in perfect condition and ready for distribution. Whether you already know what you need or would like expert guidance, our team is ready to advise and customize solutions based on your project goals. Pricing is evaluated individually to make sure you receive fair and accurate rates. \nInternational shipping requires the right balance of speed, cost, and practicality. We help you choose the most effective mode of transportation by sea, sea/air or air based on your timeline, budget, and business needs. With the right logistics strategy, your products reach their destination on time, securely, and at the best value.`,
  },
  {
    label: "Consultancy",
    image: [small7, small5] as string[],
    description: `Rivo Canada Inc. provides expert product development and sourcing consultancy designed to help fashion brands bring ideas to life with precision, strategy, and commercial clarity. We work with designers, start-ups, retailers, and established labels to transform creative concepts into market-ready products supported by the right suppliers and production partners. \n Our approach is built on deep industry experience and strong factory relationships across Bangladesh and global manufacturing hubs. We focus not only on creativity, but also on practicality — ensuring every style can be produced efficiently, priced competitively, and aligned with your target market. \n We help brands avoid costly trial-and-error by offering guidance that blends design insight, material knowledge, technical expertise, and supply chain intelligence. Whether you’re developing your first product or expanding your existing assortment, our team supports you at each step with clarity and confidence.`,
    subService: {
      label: "Our Product Development & Sourcing Services Include:",
      list: [
        "Product Concept & Design Support – Helping refine ideas, develop design directions, and create commercially viable product concepts.",
        "Material, Fabric & Trim Sourcing – Identifying reliable suppliers and selecting the best materials to match quality, cost, and performance needs.",
        "Technical Specifications & Sampling – Preparing tech packs, guiding prototype development, and ensuring samples meet design and quality expectations.",
        "Supplier Identification & Vetting – Matching your product requirements with trusted factory partners that meet ethical, quality, and delivery standards.",
        "Costing, Feasibility & Production Strategy – Analyzing pricing, lead times, and manufacturing options to ensure you launch products that are profitable and production-ready.",
        "End-to-End Support from Idea to Production – Providing ongoing consultation to streamline development, reduce risks, and successfully bring products to market.",
      ],
    },
  },
];
