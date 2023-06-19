import { DeleteIcon } from '@chakra-ui/icons'
import {
  Button,
  ButtonGroup,
  Card,
  CardFooter,
  Divider,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react'

interface IPetCardProps {
  petName: string
  petType: 'dog' | 'cat'
  onClickButtonSee: () => void
  onClickButtonDelete: () => void
}

export const PetCard: React.FC<IPetCardProps> = ({
  onClickButtonDelete,
  onClickButtonSee,
  petName,
  petType,
}) => {
  const petImageType = petType === 'cat' ? '/images/cat.png' : '/images/dog.png'

  return (
    <Card maxW="max-content" paddingX={4} paddingTop={4}>
      <Image width="150px" src={petImageType} />
      <Text fontSize="3xl" fontWeight="medium" textAlign="center">
        {petName[0].toUpperCase() + petName.toLowerCase().substring(1)}
      </Text>

      <Divider />

      <CardFooter paddingY={2} paddingX={0}>
        <ButtonGroup isAttached width="full">
          <Button onClick={onClickButtonSee} colorScheme="blue" width="full">
            Ver
          </Button>
          <IconButton
            onClick={onClickButtonDelete}
            colorScheme="red"
            aria-label=""
            icon={<DeleteIcon />}
          />
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
