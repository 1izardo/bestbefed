import express, { Request, Response } from "express";
import {
  createStore,
  loginStore,
  logoutStore,
  fetchStores,
  getStoreProfile,
  updateStoreProfile,
} from "../controllers/store";
import {
  listInventory,
  addInventoryItem,
  removeInventoryItem,
  updateInventoryItem,
} from "../controllers/inventory";
import { isAuthenticated } from "../controllers/auth";

const router = express.Router();

// Store inventory CRUD endpoints
router.patch("/items/:itemId", isAuthenticated, updateInventoryItem);
router.delete("/items/:itemId", isAuthenticated, removeInventoryItem);
router.post("/items", isAuthenticated, addInventoryItem);
router.get("/items", isAuthenticated, listInventory);

// Store profile endpoints
router.get("/profile", isAuthenticated, getStoreProfile);
router.patch("/profile", isAuthenticated, updateStoreProfile);

// Set up route handlers for all routes beginning with "/store"
// Store creation and auth
router.post("/login", loginStore);
router.get("/logout", logoutStore);
router.get("/stores", fetchStores);
router.post("/", createStore);

export default router;
