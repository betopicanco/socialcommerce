import Option from "./Option";

const ProfileNav = () => {
  return (
    <nav className="flex w-full">
      <Option value="feed">
        Publicações
      </Option>

      <span className="border-l border-neutral-400"></span>

      <Option value="shop">
        Loja
      </Option>

      <span className="border-l border-neutral-400"></span>

      <Option value="exclusive">
        Exclusivo
      </Option>
    </nav>
  );
}

export default ProfileNav;