import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import "./styles.scss";

import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { Mail } from "../modals/Login/Mail";
import { Password } from "../modals/Login/Password";
import { InputLabel } from "@mui/material";

const MenuMobile = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const [loginVisible, loginSetVisible] = React.useState(false);
	const loginHandler = () => loginSetVisible(true);
	const loginCloseHandler = () => {
		loginSetVisible(false);
		console.log("closed");
	};
	const [signupVisible, signupSetVisible] = React.useState(false);
	const signupHandler = () => signupSetVisible(true);
	const signupCloseHandler = () => {
		signupSetVisible(false);
		console.log("closed");
	};

	return (
		<div className="MenuMobile">
			<React.Fragment>
				<Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
					<Typography sx={{ minWidth: 100 }}>Explore</Typography>
					<Typography sx={{ minWidth: 100 }}>Market</Typography>
					<Typography sx={{ minWidth: 100 }}>Create</Typography>
					<Tooltip title="User Menu">
						<IconButton onClick={handleClick} size="small" sx={{ ml: 2 }} aria-controls={open ? "account-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined}>
							<Avatar sx={{ width: 32, height: 32 }}>
								<PersonOutlineOutlinedIcon />
							</Avatar>
						</IconButton>
					</Tooltip>
				</Box>
				<Menu
					anchorEl={anchorEl}
					id="user-menu"
					open={open}
					onClose={handleClose}
					onClick={handleClose}
					PaperProps={{
						elevation: 0,
						sx: {
							overflow: "visible",
							filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
							mt: 1.5,
							"& .MuiAvatar-root": {
								width: 32,
								height: 32,
								ml: -0.5,
								mr: 1,
							},
							"&:before": {
								content: '""',
								display: "block",
								position: "absolute",
								bottom: 0,
								right: 14,
								width: 10,
								height: 10,
								bgcolor: "background.paper",
								transform: "translateY(-50%) rotate(45deg)",
								zIndex: 0,
							},
						},
					}}
					transformOrigin={{ horizontal: "right", vertical: "bottom" }}
					anchorOrigin={{ horizontal: "right", vertical: "top" }}
				>
					<MenuItem onClick={loginHandler}>
						<LoginOutlinedIcon /> Login
					</MenuItem>
					<MenuItem onClick={signupHandler}>
						<PersonAdd /> Signup
					</MenuItem>
					<Divider />
					<MenuItem>
						<ListItemIcon>
							<AppsOutlinedIcon fontSize="small" />
						</ListItemIcon>
						My showcase
					</MenuItem>
					<MenuItem>
						<ListItemIcon>
							<BookmarksOutlinedIcon fontSize="small" />
						</ListItemIcon>
						My favorite
					</MenuItem>
					<MenuItem>
						<ListItemIcon>
							<AccountBoxOutlinedIcon fontSize="small" />
						</ListItemIcon>
						My profil
					</MenuItem>
					<MenuItem>
						<ListItemIcon>
							<Logout fontSize="small" />
						</ListItemIcon>
						Logout
					</MenuItem>
				</Menu>
			</React.Fragment>
			<Modal className="modal-login" closeButton blur open={loginVisible} onClose={loginCloseHandler}>
				<Modal.Header>
					<Text id="modal-login" size={18}>
						Login
					</Text>
				</Modal.Header>
				<Modal.Body>
					<Input type="email" clearable bordered fullWidth color="primary" size="lg" placeholder="Email" contentLeft={<Mail fill="currentColor" />} />
					<Input type="password" clearable bordered fullWidth color="primary" size="lg" placeholder="Password" contentLeft={<Password fill="currentColor" />} />
					<Row justify="space-between">
						<Checkbox>
							<Text size={14}>Remember me</Text>
						</Checkbox>
						<Text size={14}>Forgot password?</Text>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button auto flat color="error" onClick={loginCloseHandler}>
						Close
					</Button>
					<Button auto onClick={loginCloseHandler}>
						Sign in
					</Button>
				</Modal.Footer>
			</Modal>
			<Modal closeButton blur open={signupVisible} onClose={signupCloseHandler}>
				<Modal.Header>
					<Text id="modal-signup" size={18}>
						Signup
					</Text>
				</Modal.Header>
				<Modal.Body>
					<Input type="text" clearable bordered fullWidth color="primary" size="lg" placeholder="Pseudo" contentLeft={<InputLabel fill="currentColor" />} />
					<Input type="email" clearable bordered fullWidth color="primary" size="lg" placeholder="Email" contentLeft={<Mail fill="currentColor" />} />
					<Input type="password" clearable bordered fullWidth color="primary" size="lg" placeholder="Password" contentLeft={<Password fill="currentColor" />} />
					<Input type="password" clearable bordered fullWidth color="primary" size="lg" placeholder="Confirm password" contentLeft={<Password fill="currentColor" />} />
				</Modal.Body>
				<Modal.Footer>
					<Button auto flat color="error" onClick={signupCloseHandler}>
						Close
					</Button>
					<Button auto onClick={signupCloseHandler}>
						Sign up
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default MenuMobile;
