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
} from '@chakra-ui/react';
import { api } from '../api/config';
import { useAuth } from '../context/AuthContext';

export const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const { user } = useAuth();
  const toast = useToast();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await api.get(`/tasks/${user.id}`);
      setTasks(response.data);
    } catch (error) {
      toast({
        title: 'Error fetching tasks',
        status: 'error',
        duration: 3000,
      });
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/tasks', {
        userId: user.id,
        title: newTask,
      });
      setTasks([...tasks, response.data]);
      setNewTask('');
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
      <form onSubmit={addTask}>
        <HStack mb={8}>
          <Input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
          />
          <Button type="submit" colorScheme="blue">
            Add
          </Button>
        </HStack>
      </form>

      <VStack align="stretch" spacing={4}>
        {tasks.map((task) => (
          <HStack key={task._id} p={4} bg="gray.50" borderRadius="md">
            <Checkbox
              isChecked={task.status === 'completed'}
              onChange={(e) => toggleTask(task._id, e.target.checked)}
            />
            <Text>{task.title}</Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
}; 