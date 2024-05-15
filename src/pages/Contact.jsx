import React, { useState } from 'react';
import { Heading, FormControl, FormLabel, Input, Textarea, Button, VStack, Box } from '@chakra-ui/react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the logic to submit the form data
    console.log(formData);
    // Reset the form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <VStack spacing={8} align="center" bg="#F3F4F6" p={8}>
      <Box bg="#F3F4F6" p={20} borderRadius="lg" boxShadow="lg" maxW="xl" > {/* Adjusted max width */}
      <Heading as="h2" fontSize="50px" fontFamily="Agbalumo" fontWeight="bold" mb={4}>Contact Me</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Enter your name" 
            />
          </FormControl >
          <FormControl id="email" isRequired mt={4}>
            <FormLabel>Email</FormLabel>
            <Input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Enter your email address" 
            />
          </FormControl>
          <FormControl id="message" isRequired mt={4}>
            <FormLabel>Message</FormLabel>
            <Textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              rows="4" 
              placeholder="Enter your message" 
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" mt={6}>Submit</Button>
        </form>
      </Box>
    </VStack>
  );
}

export default Contact;
