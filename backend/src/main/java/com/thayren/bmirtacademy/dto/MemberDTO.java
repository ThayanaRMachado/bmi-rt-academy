package com.thayren.bmirtacademy.dto;

import java.io.Serializable;

import com.thayren.bmirtacademy.entities.Member;
import com.thayren.bmirtacademy.entities.Trainer;

public class MemberDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private Integer age;
	private Double height;
	private Double weight;
	private Double bmi;
	private String rank;
	private Trainer trainer;

	public MemberDTO() {
	}

	public MemberDTO(Long id, String name, Integer age, Double height, Double weight, Double bmi, String rank, Trainer trainer) {
		this.id = id;
		this.name = name;
		this.age = age;
		this.height = height;
		this.weight = weight;
		this.bmi = bmi;
		this.rank = rank;
		this.trainer = trainer;
	}

	public MemberDTO(Member entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.age = entity.getAge();
		this.height = entity.getHeight();
		this.weight = entity.getWeight();
		this.bmi = entity.getBmi();
		this.rank = entity.getRank();
		this.trainer = entity.getTrainer();
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

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public Double getHeight() {
		return height;
	}

	public void setHeight(Double height) {
		this.height = height;
	}

	public Double getWeight() {
		return weight;
	}

	public void setWeight(Double weight) {
		this.weight = weight;
	}

	public Double getBmi() {
		return bmi;
	}

	public void setBmi(Double bmi) {
		this.bmi = bmi;
	}

	public String getRank() {
		return rank;
	}

	public void setRank(String rank) {
		this.rank = rank;
	}

	public Trainer getTrainer() {
		return trainer;
	}

	public void setTrainer(Trainer trainer) {
		this.trainer = trainer;
	}

}
