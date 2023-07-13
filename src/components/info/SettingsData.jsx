import { settings } from "../../helpers/settings";

export const SettingsData = ({ user }) => {
  return (
    <div className="settings__data">
      {settings.map((item) => {
        return (
          <div className="settings__data__item" key={item.id}>
            <span className="settings__data__item-title">{item.title}</span>
            <span className="settings__data__item-desc">
              {item.description}
            </span>
            <span className="settings__data__item-text">
              {user[item.title] ? user[item.title] : item.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};
