"use client";

import React from "react";
import {
  StyledDialog,
  StyledDialogTitle,
  StyledDialogContent,
  StyledDialogActions,
  StyledPrimaryButton,
  StyledSecondaryButton,
} from "./elements";
import { TermsModalProps } from "./interface";

export const TermsModal: React.FC<TermsModalProps> = ({
  open,
  onClose,
  onAccept,
}) => {
  return (
    <StyledDialog open={open} onClose={onClose}>
      <StyledDialogTitle>Terms and Conditions</StyledDialogTitle>
      <StyledDialogContent>
        <h3>Lorem Ipsum Dolor Sit Amet</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
        
        <h3>Consectetur Adipiscing Elit</h3>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
        </p>
        <ul>
          <li>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti</li>
          <li>Quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa</li>
          <li>Qui officia deserunt mollitia animi, id est laborum et dolorum fuga</li>
          <li>Et harum quidem rerum facilis est et expedita distinctio nam libero tempore</li>
        </ul>
        
        <h3>Tempor Incididunt Ut Labore</h3>
        <p>
          Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
        </p>
        <p>
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
        <h3>Quis Nostrud Exercitation</h3>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>
        <ul>
          <li>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae</li>
          <li>Dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur</li>
          <li>Aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</li>
          <li>Voluptatem sequi nesciunt neque porro quisquam est, qui dolorem ipsum</li>
        </ul>
        
        <h3>Voluptate Velit Esse Cillum</h3>
        <p>
          Quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
        </p>
        <p>
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
        </p>
        
        <h3>Excepteur Sint Occaecat</h3>
        <p>
          Quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.
        </p>
        <p>
          Quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
        </p>
        <ul>
          <li>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias</li>
          <li>Consequatur aut perferendis doloribus asperiores repellat lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</li>
          <li>Aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</li>
        </ul>
        
        <h3>Magna Aliqua Ut Enim</h3>
        <p>
          Ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
        </p>
        <p>
          Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </StyledDialogContent>
      <StyledDialogActions>
        <StyledSecondaryButton onClick={onClose}>Close</StyledSecondaryButton>
        <StyledPrimaryButton onClick={onAccept}>Accept</StyledPrimaryButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};