const Payment = require("../models/paymentModel");

const createPayment = async (req, res) => {
  try {
    const payment = new Payment(req.body);
    const savedPayment = await payment.save();
    res.status(201).json({
      message: "Payment created successfully.",
      CreatePayment: savedPayment,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      CreatePayment: error,
    });
  }
};

const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    if (payments.length === 0) {
      res.status(404).json({
        message: "No payments found.",
        GetAllPayments: payments,
      });
    } else {
      res.status(200).json({
        message: "All payments fetched successfully.",
        GetAllPayments: payments,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      GetAllPayments: error,
    });
  }
};

const getPaymentById = async (req, res) => {
  try {
    const id = req.params.id;
    const payment = await Payment.findById(id);
    if (!payment) {
      res.status(404).json({
        message: "Payment not found.",
        GetPaymentById: payment,
      });
    } else {
      res.status(200).json({
        message: "Payment fetched successfully.",
        GetPaymentById: payment,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      GetPaymentById: error,
    });
  }
};

const updatePayment = async (req, res) => {
  try {
    const id = req.params.id;
    const payment = await Payment.findById(id);
    if (!payment) {
      res.status(404).json({
        message: "Payment not found.",
        UpdatePayment: payment,
      });
    } else {
      const updatedPayment = await Payment.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json({
        message: "Payment updated successfully.",
        UpdatePayment: updatedPayment,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      UpdatePayment: error,
    });
  }
};

const deletePayment = async (req, res) => {
  try {
    const id = req.params.id;
    const payment = await Payment.findById(id);
    if (!payment) {
      res.status(404).json({
        message: "Payment not found.",
        DeletePayment: payment,
      });
    } else {
      await Payment.findByIdAndDelete(id);
      res.status(200).json({
        message: "Payment deleted successfully.",
        DeletePayment: payment,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      DeletePayment: error,
    });
  }
};

module.exports = {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
};
