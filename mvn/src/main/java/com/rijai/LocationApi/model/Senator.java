package com.rijai.LocationApi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Senator implements Serializable {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long id;
        private String name;
        private String partyList;
        private String lawsPassed;
        private String knownFor;
        private String background;
        private String imageUrl;
        private String president;
        public Senator() {}

        public Senator(String name, String partyList, String lawsPassed, String knownFor, String background, String imageUrl){
            this.name = name;
            this.lawsPassed = lawsPassed;
            this.partyList = partyList;
            this.knownFor = knownFor;
            this.background = background;
            this.imageUrl = imageUrl;
            this.president = president;
        }

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getPartyList() {
            return partyList;
        }

        public void setPartyList(String partyList) { this.partyList = partyList; }

        public String getLawsPassed() {
            return lawsPassed;
        }

        public void setLawsPassed(String lawsPassed) {
            this.lawsPassed = lawsPassed;
        }

        public String getKnownFor() {
            return knownFor;
        }

        public void setKnownFor(String knownFor) {
            this.knownFor = knownFor;
        }

        public String getBackground() {
            return background;
        }

        public void setBackground(String background) {
            this.background = background;
        }

        public String getImageUrl() {
            return imageUrl;
        }

        public void setImageUrl(String imageUrl) {
            this.imageUrl = imageUrl;
        }

        public String getPresident() {
          return president;
        }

        public void setPresident(String president) {
          this.president = president;
        }

        @Override
        public String toString(){
            return "Senator{" +
                    "id=" + id +
                    ", name= '" + name + '\'' +
                    ", partyList= '" + partyList + '\'' +
                    ", lawsPassed= '" + lawsPassed + '\'' +
                    ", knownFor= '" + knownFor + '\'' +
                    ", background= '" + background + '\'' +
                    ", imageUrl= '" + imageUrl + '\'' +
                    ", president = '" + president + '\'' +
                    '}';
        }
}
