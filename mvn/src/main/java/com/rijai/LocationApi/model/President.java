package com.rijai.LocationApi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;



@Entity
public class President implements Serializable {
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String partyList;
    private String lawsPassed;
    private String knownFor;
    private String education;
    private String imageUrl;
    public President() {}

    public President(String name, String partyList, String lawsPassed, String knownFor, String education, String imageUrl){
        this.name = name;
        this.partyList = partyList;
        this.lawsPassed = lawsPassed;
        this.knownFor = knownFor;
        this.education = education;
        this.imageUrl = imageUrl;

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

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Override
    public String toString(){
        return "President{" +
                "id=" + id +
                ", name= '" + name + '\'' +
                ", partyList= '" + partyList + '\'' +
                ", lawsPassed= '" + lawsPassed + '\'' +
                ", knownFor= '" + knownFor + '\'' +
                ", education= '" + education + '\'' +
                ", imageUrl= '" + imageUrl + '\'' +
                '}';
    }
}