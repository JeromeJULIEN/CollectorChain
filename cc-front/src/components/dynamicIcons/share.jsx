import React, { Component } from "react";
import {
	EmailShareButton,
	EmailIcon,
	FacebookShareButton,
	FacebookIcon,
	FacebookMessengerShareButton,
	FacebookMessengerIcon,
	WhatsappShareButton,
	WhatsappIcon,
	TwitterShareButton,
	TwitterIcon,
	LinkedinShareButton,
	LinkedinIcon,
} from "react-share";

import { Dropdown, Popover, Whisper } from "rsuite";

import "./styles.scss";
import { nodeName } from "rsuite/esm/DOMHelper";

const Share = ({ url }) => {
	const shareUrl = `https://collector-chain.herokuapp.com${url}`;
	const iconSize = 30;
	return (
		<>
			<div className="share-icon">
				<Dropdown icon={<ion-icon name="share-social-outline" style={{ color: "black" }}></ion-icon>} noCaret placement="bottomEnd">
					<Dropdown.Item>
						<EmailShareButton url={shareUrl}>
							<EmailIcon size={iconSize} round="true" />
						</EmailShareButton>
					</Dropdown.Item>
					<Dropdown.Item>
						<FacebookShareButton url={shareUrl}>
							<FacebookIcon size={iconSize} round="true" />
						</FacebookShareButton>
					</Dropdown.Item>
					<Dropdown.Item>
						<FacebookMessengerShareButton url={shareUrl}>
							<FacebookMessengerIcon size={iconSize} round="true" />
						</FacebookMessengerShareButton>
					</Dropdown.Item>
					<Dropdown.Item>
						<WhatsappShareButton url={shareUrl}>
							<WhatsappIcon size={iconSize} round="true" />
						</WhatsappShareButton>
					</Dropdown.Item>
					<Dropdown.Item>
						<TwitterShareButton url={shareUrl}>
							<TwitterIcon size={iconSize} round="true" />
						</TwitterShareButton>
					</Dropdown.Item>
					<Dropdown.Item>
						<LinkedinShareButton url={shareUrl}>
							<LinkedinIcon size={iconSize} round="true" />
						</LinkedinShareButton>
					</Dropdown.Item>
				</Dropdown>
			</div>
		</>
	);
};

export default Share;
