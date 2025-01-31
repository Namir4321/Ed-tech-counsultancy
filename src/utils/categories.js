import { IconType } from "react-icons";
import { MdCabin } from "react-icons/md";

import { TbCaravan, TbTent, TbBuildingCottage, TbLayoutCollage } from "react-icons/tb";

import { PiWarehouse, PiLighthouse, PiVan } from "react-icons/pi";

import { FaSchool } from "react-icons/fa6";
import { FaPassport } from "react-icons/fa6";
import { FcBusinessman } from "react-icons/fc";
import { Building } from "lucide-react";
import { FaSchoolFlag } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";

export const categories = [
  {
    link: "study",
    label: "Visa",
    icon: FaPassport,
  },
  {
    link: "business",
    label: "Business",
    icon: FcBusinessman,
  },
  {
    link: "instution",
    label: "Instution",
    icon: FaSchoolFlag,
  },
  {
    link: "partner",
    label: "Partner",
    icon: FaHandshakeSimple,
  },
];
