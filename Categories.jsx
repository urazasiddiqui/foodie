import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoupFilled } from "react-icons/tb";
import { GiNoodles } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
const Categories = [
    {
        id: 1,
        name: "All",
        icon: <TiThSmallOutline/>

    },
     {
        id: 2,
        name: "BreakFast",
        icon: <MdOutlineFreeBreakfast/>

    },
     {
        id: 3,
        name: "Soups",
        icon: <TbSoupFilled/>

    },
     {
        id: 4,
        name: "Pasta",
        icon: <GiNoodles/>

    },
     {
        id: 5,
        name: "Main Course",
        icon: <ImSpoonKnife/>

    },
     {
        id: 6,
        name: "Pizza",
        icon: <GiFullPizza/>

    },
     {
        id: 7,
        name: "Burger",
        icon: <GiHamburger/>

    }

]

export default Categories