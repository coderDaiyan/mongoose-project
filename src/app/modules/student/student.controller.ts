import { Request, Response } from 'express';
import { IStudent } from './student.interface';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student: IStudent = req.body;
    const result = await StudentServices.createStudentIntoDB(student);
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: 'Something went wrong',
      data: e.message,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students found successfully',
      data: result,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: 'Something went wrong',
      data: e.message,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getSingleStudentFromDB(req.params.sid);
    res.status(200).json({
      success: true,
      message: 'Student found successfully',
      data: result,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: 'Something went wrong',
      data: e.message,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
