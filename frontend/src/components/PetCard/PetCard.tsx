import {
  Button,
  Card,
  CardFooter,
  Divider,
  Image,
  Text,
} from '@chakra-ui/react'

interface IPetCardProps {
  petName: string
  petType: 'dog' | 'cat'
  onClickButtonCard: () => void
}

export const PetCard: React.FC<IPetCardProps> = ({
  onClickButtonCard,
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
        <Button onClick={onClickButtonCard} colorScheme="blue" width="full">
          Ver
        </Button>
      </CardFooter>
    </Card>
  )
}
