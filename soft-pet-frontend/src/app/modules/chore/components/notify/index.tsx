import { ToastContainer } from "react-toastify";
import theme from "../../theme";
import { CatIcon, DogIcon, DogTagIcon } from "../../assets/svg";


export const NotifyContainer = () => {
    
    return(
        <ToastContainer
            toastStyle={{
                background: theme.colors.light,
                color: theme.colors.blue300,
                fontSize: theme.fonts_size.md
            }}
            progressStyle={{
                background: `linear-gradient(${theme.gradients.secondGradient})`,
            }}
            icon={({ type } : { type: string }) => {
                switch (type) {
                    case 'success':
                      return <DogTagIcon w="26" color={theme.colors.blue300}/>;
                    case 'error':
                      return <DogTagIcon />;
                    case 'info':
                      return <CatIcon />;
                    case 'warning':
                      return <DogIcon />;
                    default:
                      return null;
                  }
            }}
        />
    )
}