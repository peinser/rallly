import Link from "next/link";
import { useRouter } from "next/router";
import { Trans, useTranslation } from "next-i18next";
import * as React from "react";

import Discord from "@/components/icons/discord.svg";
import Star from "@/components/icons/star.svg";
import Translate from "@/components/icons/translate.svg";
import Twitter from "@/components/icons/twitter.svg";
import DigitalOcean from "~/public/digitalocean.svg";
import Logo from "~/public/logo.svg";
import Sentry from "~/public/sentry.svg";
import Vercel from "~/public/vercel-logotype-dark.svg";

import { LanguageSelect } from "../poll/language-selector";

const Footer: React.VoidFunctionComponent = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <div></div>
  );
};

export default Footer;
