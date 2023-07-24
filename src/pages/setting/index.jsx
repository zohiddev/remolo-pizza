import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/ui/Button";
import SettingsData from "../../data/SettingsData";
import { settingColors } from "../../data/settings";
import { setColor } from "../../redux/slices/settingSlice";


export const SettingPage = () => {
  const {setting} = useSelector((state) => state)
  const dispatch = useDispatch();
  const colorButtonHandler = (key ) => {
    dispatch(setColor(key))
  }

    return(
  
      <main className="main">
          <div className="settings">
          <div className="settings__row">
            <div className="settings__title">
              <span className="settings__title-text">Preferencias</span>
              <span className="settings__title-desc">Configura la página, tema oscuro/claro y automatiza el checkout</span>
            </div>
            <SettingsData/>
            <div className="settings__theme">
              <span className="settings__theme-title">Tema oscuro</span>
              <span className="settings__theme-desc">Alterna entre el tema claro y oscuro, así puedes cuidar tu vista</span>
              <div className="settings__theme__switch">
                <label className="switch">
                  <input type="checkbox"/>
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="color-buttons">
                {
                  settingColors.map(item => <button key={item.id} className={`color-button ${item.title}  ${setting.color === item.title ? 'active' : ''}`}  onClick={() => colorButtonHandler(item.title)} > {item.title} </button>)
                }

              </div>
            </div>
          </div>
        </div>
    </main>
    )
  };