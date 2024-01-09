
import Assets from "./data/assets";
import type {Education} from "./types";

export const MY_EDUCATION: Array<Education> = [
    {
        name: "Codeup",
        degree: "Certificate of Completion",
        description: "",
        location: "San Antonio, TX",
        logo: Assets.Codeup,
        organization: "Codeup",
        period: { from: new Date(2023, 0, 17), to: new Date(2023, 5, 16) },
        shortDescription: "",
        slug: "codeup",
        subjects: []
    }
];

export default MY_EDUCATION;