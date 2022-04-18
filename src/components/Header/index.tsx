import {Center, Icon, Image, Link as ChakraLink, useBreakpointValue} from "@chakra-ui/react";
import Link from 'next/link';
import { FiChevronLeft } from "react-icons/fi";

interface HeaderProps {
    hasBackLink?: boolean; 
}

export  function Header({hasBackLink = false}: HeaderProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })


    return(
        <Center
        w="100%"
        h={isWideVersion ? '100' : '50'}
        maxW={1240}
        mx='auto'
        px={['4', '10']}
        position='relative'
        >
            {hasBackLink && (
                <Link href='/'>
                <ChakraLink 
                  aria-label="Open navigation"
                  variant="unstyled"
                  color="#rgb(0,0,0,0.25)"
                  zIndex="1"
                >
                  <Icon fontSize="30" as={FiChevronLeft}/> 
                 </ChakraLink> 
                </Link>
            )}
            <Image 
                src='images/Logo.png' 
                alt="worldtrip"
                w={!isWideVersion && '81px'}
            /> 
        </Center>
    );
}