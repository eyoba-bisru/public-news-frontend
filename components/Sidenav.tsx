import React, { ReactNode } from 'react'
import Link from 'next/link'
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { FiMenu, FiChevronDown } from 'react-icons/fi'

import { GoDashboard, GoReport } from 'react-icons/go'
import { RiAdminLine } from 'react-icons/ri'
import { BsGearWideConnected } from 'react-icons/bs'
import { IconType } from 'react-icons'
import { BiAddToQueue } from 'react-icons/bi'
import { ReactText } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../context/AuthContext'
import { MdReport } from 'react-icons/md'

interface LinkItemProps {
  name: string
  icon: IconType
  route: string
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: GoDashboard, route: '/admin' },
  { name: 'News Companies', icon: BiAddToQueue, route: '/admin/company' },

  {
    name: 'Report',
    icon: GoReport,
    route: '/admin/report',
  },
]

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH='100vh' bg='gray.100'>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p='4' bg='#CCC9A1'>
        {children}
      </Box>
    </Box>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition='3s ease'
      bg='#4C230A'
      borderRight='1px'
      //   borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Text fontSize='2xl' fontWeight='bold' color='white'>
          <div className='flex justify-center items-center gap-4'>
            <RiAdminLine />
            Admin
          </div>
        </Text>
        <CloseButton
          color='white'
          display={{ base: 'flex', md: 'none' }}
          onClick={onClose}
        />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          className='my-2'
          icon={link.icon}
          route={link.route}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

interface NavItemProps extends FlexProps {
  icon: IconType
  route: string
  children: ReactText
}
const NavItem = ({ icon, route, children, ...rest }: NavItemProps) => {
  const router = useRouter()
  return (
    <Link href={route} style={{ textDecoration: 'none' }}>
      <Flex
        align='center'
        p='4'
        mx='4'
        bg={`${router.asPath == route ? '#A53F2B' : '#4C230A'}`}
        color='white'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: '#A53F2B',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr='4'
            fontSize='16'
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const { user } = useAuth()

  const logout = useAuth().logout

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height='20'
      alignItems='center'
      bg='#F0FFCE'
      borderBottomWidth='1px'
      borderBottomColor='gray.200'
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant='outline'
        aria-label='open menu'
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize='2xl'
        fontWeight='bold'
      >
        <div className='flex justify-center items-center gap-4'>
          <RiAdminLine />
          Admin
        </div>
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition='all 0.3s'
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <Avatar
                  size={'sm'}
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/files/${user.logo}`}
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems='flex-start'
                  spacing='1px'
                  ml='2'
                >
                  <Text fontSize='sm'>{user.name}</Text>
                  <Text fontSize='xs' color='gray.600'>
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList bg='#F0FFCE' borderColor='gray.200'>
              <Link href='/admin/changepassword'>
                <MenuItem>Change password</MenuItem>
              </Link>
              <MenuItem bg='#F0FFCE' onClick={logout}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}
