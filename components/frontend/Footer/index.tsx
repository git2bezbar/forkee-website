import Image from "next/image";
import location from "@/assets/icons/frontend/location.svg";
import phone from "@/assets/icons/frontend/phone.svg";
import facebook from "@/assets/icons/frontend/facebook.svg";
import twitter from "@/assets/icons/frontend/x.svg";
import instagram from "@/assets/icons/frontend/instagram.svg";
import thefork from "@/assets/icons/frontend/thefork.svg";
import tripadvisor from "@/assets/icons/frontend/tripadvisor.svg";
import { ContactSettings, GeneralSettings, WebsiteMenu } from "@/services/types";
import { PAGE_NAMES, PAGE_PATHS } from "@/services/commons";
import Link from "next/link";

interface FooterMenuItem {
  menu: WebsiteMenu;
  uuid: string;
  phoneNumber: ContactSettings["phoneNumber"];
  socialLinks: ContactSettings["socialLinks"];
  street: GeneralSettings["street"];
  postCode: GeneralSettings["postCode"];
  city: GeneralSettings["city"];
  timeSlots: GeneralSettings["timeSlots"];
  restaurantName: string;
}

const getSocialNetworkIcon = (platform: string) => {
  switch (platform) {
    case "facebook":
      return facebook;
    case "twitter":
      return twitter;
    case "instagram":
      return instagram;
    case "thefork":
      return thefork;
    case "tripadvisor":
      return tripadvisor;
    default:
      return facebook;
  }
}

export default function Footer({
  menu,
  uuid,
  phoneNumber,
  socialLinks,
  street,
  postCode,
  city,
  timeSlots,
  restaurantName
}: FooterMenuItem) {

  const footerMenuItems = menu
  .filter((menuItem) => menuItem.isActive)
  .sort((a, b) => a.order - b.order)
  .map((menuItem) => ({
    href: `${uuid}${ PAGE_PATHS[menuItem.type] }`,
    label: PAGE_NAMES[menuItem.type],
  }));

  const socialNetworks = socialLinks
  .filter((socialLink) => socialLink.is_active)
  .map((socialLink) => ({
    url: socialLink.url,
    icon: getSocialNetworkIcon(socialLink.platform),
  }));

  return (
  <footer className="bg-white px-8 xl:px-32 py-8 pb-12 flex flex-col items-center">
    <div className="xl:grid grid-cols-4 flex flex-col gap-8">
      <div className="flex flex-col items-start gap-4">
        <h3 className="font-bold">{ restaurantName }</h3>
      </div>
      <div className="flex flex-col items-start gap-4">
        <h3 className="font-bold">Menu du site</h3>
        <ul className="flex flex-col items-start gap-4">
          {
            footerMenuItems.map((menuItem, index) => (
              <li key={index}>
                <Link href={`/${menuItem.href}`}>{menuItem.label}</Link>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="flex flex-col items-start gap-4">
        <h3 className="font-bold">Nous joindre</h3>
        <ul className="flex flex-col gap-4">
          {
            street && postCode && city && (
              <li className="flex items-center gap-4">
                <Image src={location} alt="Adresse" />
                { street }, <br /> { postCode } { city }
              </li>
            )
          }
          {
            phoneNumber && (
              <li className="flex items-center gap-4">
                <Image src={phone} alt="Téléphone" />
                { phoneNumber }
              </li>
            )
          }
          <li>
            <ul className="flex items-center gap-4 pt-4">
              {
                socialNetworks.map((socialNetwork, index) => (
                  <li key={index}>
                    <a href={socialNetwork.url}>
                      <Image
                        src={socialNetwork.icon}
                        alt="Facebook"
                        width="32"
                        height="32"
                      />
                    </a>
                  </li>
                ))
              }
            </ul>
          </li>
        </ul>
      </div>
      <h4 className="text-sm">Copyright © 2023 { restaurantName }. Tous droits réservés. Site propulsé grâce à Forkee 🚀.</h4>
    </div>
  </footer> 
  )
}