import Link from "next/link";
import { useTranslate } from "../../../../hooks/useTranslate";

export const Toolbar = ({ setPaper }: any) => {
  const { t } = useTranslate();

  return (
    <ul>
      <li>
        <Link href="/">
          <a>{t.header.inicio}</a>
        </Link>
      </li>
      <li>
        <a onClick={() => setPaper(true)}>{t.header.developer}</a>
      </li>
      <li>
        <a onClick={() => setPaper(true)}>{t.header.product}</a>
      </li>
      <li>
        <a onClick={() => setPaper(true)}>{t.header.lastnews}</a>
      </li>
      <li>
        <a onClick={() => setPaper(true)}>{t.header.community}</a>
      </li>
      <li>
        <a onClick={() => setPaper(true)}>{t.header.about}</a>
      </li>
      <li>
        <a onClick={() => setPaper(true)}>{t.header.forms}</a>
      </li>
      <li>
        <a onClick={() => setPaper(true)}>{t.header.update}</a>
      </li>
    </ul>
  );
};
