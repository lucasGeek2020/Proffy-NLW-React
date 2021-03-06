import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher}from '../../components/TeacherItem'
import Select from '../../components/Select';
import Input from '../../components/Input';
import api from '../api';

import './styles.css'





function TeacherList() {

    const [teachers,setTeachers] = useState([]);

    const [subject,setSubject] = useState('')
    const [week_day,setWeekDay] = useState('')
    const [time,setTime] = useState('')  

    async function searchTeacher(e:FormEvent){
        e.preventDefault();

       const respose =  await api.get('classes',{
            params:{
                subject,
                week_day,
                time,
            }
        })
        setTeachers(respose.data)
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader
                title="Estes são os proffys disponíveis." >
                <form id="search-teachers" onSubmit={searchTeacher}>
                <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={e=>{
                            setSubject(e.target.value)
                        }}
                        options={[
                            {value:'Artes', label:'Artes'},
                            {value:'Biologia', label:'Biologia'},
                            {value:'Química', label:'Química'},
                            {value:'Ciência', label:'Ciência'},
                            {value:'Educação Física', label:'Educação Física'},
                            {value:'Português', label:'Português'},
                            {value:'Matemática', label:'Matemática'}
                        ]}
                     />
                      <Select 
                        name="week_day" 
                        label="Dia da semana"
                        value={week_day}
                        onChange={e=>{
                            setWeekDay(e.target.value)
                        }}
                        options={[
                            {value:'0', label:'Domingo'},
                            {value:'1', label:'Segunda-feira'},
                            {value:'2', label:'Terça-feira'},
                            {value:'3', label:'Quarta-Feira'},
                            {value:'4', label:'Quinta-feira'},
                            {value:'5', label:'Sexta-feira'},
                            {value:'6', label:'Sábado'}
                        ]}
                     />
                   
                   <Input
                        name="time" 
                        label="Hora" 
                        type="time"
                        value={time}
                        onChange={e=>{
                            setTime(e.target.value)
                            
                        }}
                    />
                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>
            <main>
                 {teachers.map((teacher:Teacher)=>{
                     return <TeacherItem 
                     key={teacher.id}
                     teacher={teacher}/>
                 })}       
            </main>
        </div>
    );
}

export default TeacherList;