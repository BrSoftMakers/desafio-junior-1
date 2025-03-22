import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Modal,
    Radio,
    RadioGroup,
    TextField,
    Typography,
  } from "@mui/material";
  import styles from "./modal.module.css";
  import registerIcon from "../../../public/registerIcon.png";
  import registerIconSmall from "../../../public/registerIconSmall.png";
  import editIconSmall from "../../../public/editIconSmall.svg";
  import removeIcon from "../../../public/removeIcon.svg";
  import backIcon from "../../../public/backIcon.png";
  import raceIcon from "../../../public/raceIcon.svg";
  import petIcon from "../../../public/petIcon.png";
  import userIcon from "../../../public/userIcon.png";
  import phoneIcon from "../../../public/phoneIcon.svg";
  import dateIcon from "../../../public/dateIcon.svg";
  import Image from "next/image";
  import CloseIcon from "@mui/icons-material/Close";
  import { LocalizationProvider } from "@mui/x-date-pickers";
  import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
  import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
  import { DatePicker } from "@mui/x-date-pickers/DatePicker";
  import "dayjs/locale/pt-br";
import iModalComponent from "./iModalComponent";

export default function ModalComponent({open, onClose, petData, setFunctions, handleFunction, modalFunction}: iModalComponent, ) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        className={styles.modal}
      >
        <Typography variant="h4" component="h2" className={styles.modalHeader}>
          <Image src={registerIcon} alt="Register Icon" />
          {modalFunction}
          <Button onClick={onClose}>
            <CloseIcon />
          </Button>
        </Typography>

        <ul>
          <li>
            <FormControl>
              <FormLabel className={styles.formLabel}>
                <Image src={petIcon} alt="Pet Icon" />
                Nome
              </FormLabel>
              <TextField
                className={styles.textfield}
                label="Nome Sobrenome"
                value={petData?.name}
                onChange={(e) => setFunctions?.setName(e.target.value)}
                fullWidth
                size="small"
                margin="normal"
                sx={{
                  "& label": { color: "#404A5C" },
                  "& label.Mui-focused": { color: "#404A5C" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#404A5C" },
                    "&:hover fieldset": { borderColor: "#404A5C" },
                    "&.Mui-focused fieldset": { borderColor: "#404A5C" },
                  },
                  input: { color: "#FFF" },
                }}
                disabled={modalFunction === "Remover" ? true : false}
              />
            </FormControl>
          </li>
          <li>
            <FormControl>
              <FormLabel className={styles.formLabel}>
                <Image src={raceIcon} alt="Race Icon" />
                Animal
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="race"
                name="race"
                value={petData?.animal}
                onChange={(e) => setFunctions?.setAnimal(e.target.value)}
                className={styles.animalRadio}
                disabled={modalFunction === "Remover" ? true : false}
              >
                <FormControlLabel
                  className={styles.radioOptions}
                  value="Cachorro"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "#404A5C",
                        "&.Mui-checked": { color: "#FFF" },
                      }}
                    />
                  }
                  label="Cachorro"
                  sx={{
                    borderColor: petData?.animal === 'Cachorro' ? "#FFF" : "#404A5C",
                    "& .MuiTypography-root": {
                      fontSize: "12px",
                      color: petData?.animal === "Cachorro" ? "#FFF" : "#404A5C",
                    },
                  }}
                />
                <FormControlLabel
                  className={styles.radioOptions}
                  value="Gato"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "#404A5C",
                        "&.Mui-checked": { color: "#FFF" },
                      }}
                    />
                  }
                  label="Gato"
                  sx={{
                    borderColor: petData?.animal === 'Gato' ? "#FFF" : "#404A5C",
                    "& .MuiTypography-root": {
                      fontSize: "12px",
                      color: petData?.animal === "Gato" ? "#FFF" : "#404A5C",
                    },
                  }}
                />
              </RadioGroup>
            </FormControl>
          </li>
          <li>
            <FormControl>
              <FormLabel className={styles.formLabel}>
                <Image src={userIcon} alt="Owner Icon" />
                Dono
              </FormLabel>
              <TextField
                className={styles.textfield}
                label="Nome Sobrenome"
                value={petData?.owner}
                onChange={(e) => setFunctions?.setOwner(e.target.value)}
                fullWidth
                size="small"
                margin="normal"
                sx={{
                  "&": { color: "#FFF"},
                  "& label": { color: "#404A5C" },
                  "& label.Mui-focused": { color: "#FFF" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#404A5C" },
                    "&:hover fieldset": { borderColor: "#404A5C" },
                    "&.Mui-focused fieldset": { borderColor: "#FFF" },
                  },
                  input: { color: "#FFF" },
                }}
                disabled={modalFunction === "Remover" ? true : false}
              />
            </FormControl>
          </li>
          <li>
            <FormControl>
              <FormLabel className={styles.formLabel}>
                <Image src={raceIcon} alt="Race Icon" />
                Raça
              </FormLabel>
              <TextField
                className={styles.textfield}
                label="Raça"
                value={petData?.race}
                onChange={(e) => setFunctions?.setRace(e.target.value)}
                fullWidth
                size="small"
                margin="normal"
                sx={{
                  "& label": { color: "#404A5C" },
                  "& label.Mui-focused": { color: "#404A5C" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#404A5C" },
                    "&:hover fieldset": { borderColor: "#404A5C" },
                    "&.Mui-focused fieldset": { borderColor: "#404A5C" },
                  },
                  input: { color: "#FFF" },
                }}
                disabled={modalFunction === "Remover" ? true : false}
              />
            </FormControl>
          </li>
          <li>
            <FormControl>
              <FormLabel className={styles.formLabel}>
                <Image src={phoneIcon} alt="Phone Icon" />
                Telefone
              </FormLabel>
              <TextField
                className={styles.textfield}
                label="(00) 0 0000-0000"
                value={petData?.phone}
                onChange={(e) => setFunctions?.setPhone(e.target.value)}
                fullWidth
                size="small"
                margin="normal"
                sx={{
                  "& label": { color: "#404A5C" },
                  "& label.Mui-focused": { color: "#404A5C" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#404A5C" },
                    "&:hover fieldset": { borderColor: "#404A5C" },
                    "&.Mui-focused fieldset": { borderColor: "#404A5C" },
                  },
                  input: { color: "#FFF" },
                }}
                disabled={modalFunction === "Remover" ? true : false}
              />
            </FormControl>
          </li>
          <li>
            <FormControl>
              <FormLabel className={styles.formLabel}>
                <Image src={dateIcon} alt="Date Icon" />
                Nascimento
              </FormLabel>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="pt-br"
              >
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    value={petData?.birthdate}
                    onChange={(date) => setFunctions?.setBirthdate(date)}
                    slotProps={{
                      textField: {
                        size: "small",
                        sx: {
                          "& label": { color: "#404A5C" },
                          "& label.Mui-focused": { color: "#404A5C" },
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "#404A5C" },
                            "&:hover fieldset": { borderColor: "#404A5C" },
                            "&.Mui-focused fieldset": {
                              borderColor: "#404A5C",
                            },
                          },
                          input: { color: "#FFF" },
                          svg: { color: "#404A5C" },
                        },
                      },
                    }}
                    disabled={modalFunction === "Remover" ? true : false}
                    className={styles.datePicker}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </FormControl>
          </li>
        </ul>

        {modalFunction === "Remover" ? <p className={styles.pRemove}> Tem certeza que deseja remover esse pet? </p> : undefined}

        <div className={styles.buttons}>
          <Button onClick={onClose} className={styles.backButtom}>
            <Image src={backIcon} alt="Back Button Icon" />
            <p className={styles.textGradient}>Voltar</p>
          </Button>
          <Button
            variant="contained"
            onClick={handleFunction}
            className={styles.registerButtom}
            sx={{
              background: modalFunction === "Remover" ? "#ED254E" : undefined
            }}
          >
            <Image
              src={modalFunction === "Cadastrar" ? registerIconSmall : modalFunction === "Editar" ? editIconSmall : removeIcon}
              alt="Small register Icon"
              width={16}
            />
            {modalFunction}
          </Button>
        </div>
      </Box>
    </Modal>
  )
}
