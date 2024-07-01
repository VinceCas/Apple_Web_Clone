import StorePage from "../../pages/StorePage"

export const navLinks = [
    {
        id: "store",
        title: "Store",
        num: 1,
        link: "StorePage"
    },
    {
        id: "mac",
        title: "Mac",
        num: 2,
        link: "/"
    },
    {
        id: "ipad",
        title: "iPad",
        num:3,
        link: "IpadPage"
    },
    {
        id: "iphone",
        title: "iPhone",
        num:4,
        link: "IphonePage"
    },
    {
        id: "watch",
        title: "Watch",
        num:5,
        link: "WatchPage"
    },
    {
        id: "vision",
        title: "Vision",
        num:6,
        link: "VisionPage"
    },
    {
        id: "airpods",
        title: "AirPods",
        num:7,
        link: "AirPodsPage"
    },
    {
        id: "tv & home",
        title: "TV&Home",
        num:8,
        link: "TvPage"
    },
    {
        id: "entertainment",
        title: "Entertainment",
        num:9,
        link: "EntertainmentPage"
    },
    {
        id: "accessories",
        title: "Accessories",
        num:10,
        link: "AccessoriesPage"
    },
    {
        id: "support",
        title: "Support",
        num:11,
        link: "SupportPage"
    },
]

import { cardPic1, cardPic2, cardPic3, cardPic4, cardPic5, cardPic6, cardPic7} from "../assets"

export const cards = [
    {
        id: "card1",
        title: "Getting Started",
        p: "Easy to use. Easy to love.",
        img: cardPic1,
    },
    {
        id: "card2",
        title: "Performance and Battery Life",
        p: "Go fast. Go far.",
        img: cardPic2,
    },
    {
        id: "card3",
        title: "Mac and iPhone",
        p: "Dream team.",
        img: cardPic3,
    },
    {
        id: "card4",
        title: "Compatibility",
        p: "Mac runs your, Favorite apps",
        img: cardPic4,
    },
    {
        id: "card5",
        title: "Privacy and Security",
        p: "Your Business is nobody else's.",
        img: cardPic5,
    },
    {
        id: "card6",
        title: "Durability",
        p: "Built to stand the test of time.",
        img: cardPic7,
    },
    {
        id: "card7",
        title: "Apple values",
        p: "Our values drive everything we do.",
        img: cardPic6,
    }
]

export const buttons = [
    {
        id: "laptops",
        name: "Laptops"
    },
    {
        id: "desktops",
        name: "Desktops"
    }, {
        id: "display",
        name: "Display"
    },
]

export const mac1 = [
    {
        id: "mac1",
        chip: "M2 or M3 chip",
        p: "Strikingly thin and fast so you can work, play, or create anywhere.",
        price: "From $999 or $83.25/mo. for 12 mon.**"
    }
]

export const mac2 = [
    {
        id: "mac2",
        chip: "M3, M3 pro, or M3 max chip",
        p: "The most advanced Mac laptops for demanding workflows.",
        price: "From $1599 or $133.25/mo. for 12 mo.**"
    }
]

export const studioD1 = [
    {
        id: "studioD1",
        name: "Studio Display",
        p: "A 5K Retina display with stellar camera and audio.",
        price: "From $1599 or $133.25/mo. for 12 mo.**"
    }
]

export const studioD2 = [
    {
        id: "studioD2",
        name: "Pro Display XDR",
        p: "An advanced 6K XDR display for pro workflows.",
        price: "From $4999 or $416.58/mo. for 12 mo.**"
    }
]

import { Macmini, Macpro, Macstudio, iMac, } from '../assets'

export const desktopConst = [
    {
        id: "iMac",
        img: iMac,
        name: "iMac",
        chip: "M3 chip",
        p: "A stunning all-in-one desktop for creativity and productivity.",
        price: "From $1299 or $108.25/mo. for 12 mo.**"
    },
    {
        id: "Macmini",
        img: Macmini,
        name: "Mac mini",
        chip: "M2 or M2 Pro chip",
        p: "The most affordable Mac desktop with outsized performance.",
        price: "From $599 or $49.91/mo. for 12 mo.**"
    },
    {
        id: "Macstudio",
        img: Macstudio,
        name: "Mac Studio",
        chip: "M2 Max or M2 Ultra chip",
        p: "Powerful performance and extensive connectivity for pro workflows.",
        price: "From $1999 or $166.58/mo. for 12 mo.**"
    },
    {
        id: "Macpro",
        img: Macpro,
        name: "Mac Pro",
        chip: "M2 Ultra chip",
        p: "A pro workstation with PCIe expansion for demanding workflows.",
        price: "From $6999 or $583.25/mo. for 12 mo.**"
    },
]

import { m2o, m2u, m2us, m3 } from "../assets"

export const desktopSpecs = [
    {
        spec1: "13.6” or 15.3”",
        p1: "Liquid Retina display with 500 nits of brightness and support for 1 billion colors",
        spec2: m3,
        p2: "Apple M3 chip",
        spec3: " — ",
        spec4: "6 ports",
        p4: "2x Thunderbolt / USB 4, up to 2x USB 3, Gigabit Ethernet, headphone jack"
    },
    {
        spec1: " — ",
        spec2: m2o,
        p2: "Apple M2 or M2 Pro chip",
        spec3: " — ",
        spec4: "9 ports",
        p4: "Up to 4x Thunderbolt 4, 2x USB-A, HDMI, Gigabit Ethernet, headphone jack"
    },
    {
        spec1: " — ",
        spec2: m2u,
        p2: "Apple M2 Max or M2 Ultra chip",
        spec3: " — ",
        spec4: "12 ports",
        p4: "Up to 6x Thunderbolt 4, 2x USB-A, up to 2x USB-C, HDMI, 10Gb Ethernet, SDXC, headphone jack"
    },
    {
        spec1: " — ",
        spec2: m2us,
        p2: "Apple M2 Ultra chip",
        spec3: "PCIe",
        p3: "Features seven expansion slots, six of which are PCle gen 4",
        spec4: "18 ports",
        p4: "8x Thunderbolt 4, 3x USB-A, 2x HDMI, 2x 10Gb Ethernet, 2x Serial ATA, headphone jack"
    },
]

import { applebag, people, id, truck, custom, recycle, card, } from '../assets'
import { Store } from "../components"

export const reasonConst = [
    {
        img: card, 
        title: "Pay over time, interest-free.",
        p: "When you choose to check out with Apple card monthly installments."
    },
    {
        img: recycle, 
        title: "Save with Apple Trade In.",
        p: "Get credit toward you next Mac when you trade and eligible device."
    },
    {
        img: custom, 
        title: "Customize your Mac.",
        p: "Choose you chip, memory storage, even color."
    },
    {
        img: truck, 
        title: "Get flexible delivery and easy pickup",
        p: "Choose two hour delivery from an Apple store, free delivery, or easy pickup options."
    },
    {
        img: id, 
        title: "Shop with live specialist",
        p: "Let us guide you live over video and answer all your questions."
    },
    {
        img: people, 
        title: "Get to know your Mac",
        p: "Learn how to get most of your new Mac with free one-on-one Personal session"
    },
    {
        img: applebag, 
        title: "Explore a shopping experience for you.",
        p: "Use the Apple store app to get more personal way to shop."
    },
]

export const footerLinks = [
    {
        title: "Explore Mac",
        links: ["Explore All Mac","MacBook Air","MacBook Pro","iMac","Mac mini","Mac Studio", "Mac Pro","Display"]
    },
    {
        title: "Shop Mac",
        links: ["Shop Mac","Mac Accessories","Apple Trade In","Financing"]
    },
    {
        title: "More for Mac",
        links: ["Mac Support","AppleCare+ for Mac","macOS Sonoma","Apps by Apple","Continuity","iCloud+","Mac for Business","Education"]

    }
]