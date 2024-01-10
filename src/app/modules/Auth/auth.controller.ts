import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { authService } from './auth.service';

const loginUser = catchAsync(async (req, res) => {
  const result = await authService.loginUser(req.body);
  const { accessToken } = result;
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully!',
    data: {
      accessToken,
    },
  });
});

export const authController = {
  loginUser,
};
