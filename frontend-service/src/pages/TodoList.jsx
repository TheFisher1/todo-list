import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Input,
  VStack,
  HStack,
  Text,
  Checkbox,
  useToast,
  Textarea,
  Tooltip,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { api } from '../api/config';
import { useAuth } from '../context/AuthContext';

export const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [description, setDescription] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const toast = useToast();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await api.get(`/tasks/user/${user.id}`);
      setTasks(response.data);
    } catch (error) {
      toast({
        title: 'Error fetching tasks',
        status: 'error',
        duration: 3000,
      });
    }
  };

  const addTask = async () => {
    try {
      const response = await api.post('/tasks/', {
        description,
        userId: user.id,
        title: newTask,
      });
      setTasks([...tasks, response.data]);
      setNewTask('');
      setDescription('');
      setIsOpen(false);
    } catch (error) {
      toast({
        title: 'Error adding task',
        status: 'error',
        duration: 3000,
      });
    }
  };

  const toggleTask = async (taskId, status) => {
    try {
      await api.put(`/tasks/${taskId}`, {
        status: status ? 'completed' : 'pending',
      });

      fetchTasks();
    } catch (error) {
      toast({
        title: 'Error updating task',
        status: 'error',
        duration: 3000,
      });
    }
  };

  return (
    <Box maxW="600px" mx="auto" mt={8} p={4}>
      <Button onClick={() => setIsOpen(true)} colorScheme="blue" mb={4}>
        Add Task
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a New Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Task Title"
              mb={4}
            />
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Task Description"
              size="sm"
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={addTask}>
              Add Task
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <VStack align="stretch" spacing={4}>
        {tasks.map((task) => (
          <HStack key={task.id} p={4} bg="gray.50" borderRadius="md">
            <Checkbox
              isChecked={task.status === 'completed'}
              onChange={(e) => {
                  console.log(task);
                  toggleTask(task.id, e.target.checked);
              }}
            />
            <Tooltip label={task.description} aria-label="Task Description">
              <Text>{task.title}</Text>
            </Tooltip>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
}; 