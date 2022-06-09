import Option from "./Option";

const ProfileNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Option value="feed">
            Publicações
          </Option>
        </li>
        <li>
          <Option value="shop">
            Loja
          </Option>
        </li>
        <li>
          <Option value="exclusive">
            Exclusivo
          </Option>
        </li>
      </ul>
    </nav>
  );
}

export default ProfileNav;