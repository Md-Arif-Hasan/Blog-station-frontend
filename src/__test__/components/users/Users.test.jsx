// import { describe, it, expect } from '@jest/globals';


// describe('something truthy and falsy', () => {
//   it('true to be true', () => {
//     expect(true).toBe(true);
//   });
// });


// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { getAllUsers } from '../../../services/userList';
// import { useNavigate } from 'react-router-dom';
// import AllUsers from '../../../components/users/Users';

// jest.mock('../../../services/userList');
// jest.mock('react-router-dom', () => ({
//   useNavigate: jest.fn(),
// }));

// describe('AllUsers', () => {
//   beforeEach(() => {
//     getAllUsers.mockResolvedValue({
//       data: [
//         {
//           id: 1,
//           username: 'user1',
//           email: 'user1@example.com',
//           updatedAt: '2022-01-01T12:00:00Z',
//           createdAt: '2022-01-01T10:00:00Z',
//         },
//         {
//           id: 2,
//           username: 'user2',
//           email: 'user2@example.com',
//           updatedAt: '2022-02-01T12:00:00Z',
//           createdAt: '2022-02-01T10:00:00Z',
//         },
//       ],
//     });
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test('renders user cards', async () => {
//     render(<AllUsers />);
    
//     await waitFor(() => {
//       const userCards = screen.getAllByTestId('user-card');
//       expect(userCards).toHaveLength(2);
//     });

//     const usernameLinks = screen.getAllByTestId('username-link');
//     expect(usernameLinks).toHaveLength(2);

//     userEvent.click(usernameLinks[0]);
//     expect(useNavigate).toHaveBeenCalledWith('/users/user1');

//     userEvent.click(usernameLinks[1]);
//     expect(useNavigate).toHaveBeenCalledWith('/users/user2');
//   });
// });
