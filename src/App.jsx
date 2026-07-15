import { useState } from "react";

const COLORS = {
  primary: "#7C3AED",
  primaryLight: "#A78BFA",
  primaryDark: "#5B21B6",
  accent: "#EC4899",
  accentLight: "#F9A8D4",
  bg: "#FAF5FF",
  bgCard: "#FFFFFF",
  text: "#1F1F2E",
  textMuted: "#6B7280",
  border: "#E9D5FF",
  success: "#10B981",
  gradient1: "linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)",
  gradient2: "linear-gradient(135deg, #FAF5FF 0%, #FDF2F8 100%)",
};

const questions = [
  {
    id: 1,
    question: "Cuando tienes tiempo libre, ¿qué prefieres hacer?",
    options: [
      { text: "Salir con amigos y conocer gente nueva", types: ["E"] },
      { text: "Leer un libro o ver una película en casa", types: ["I"] },
      { text: "Planificar un proyecto o meta futura", types: ["J"] },
      { text: "Explorar algo nuevo sin planes fijos", types: ["P"] },
    ],
  },
  {
    id: 2,
    question: "¿Cómo tomas decisiones importantes?",
    options: [
      { text: "Analizo datos y hechos concretos", types: ["T", "S"] },
      { text: "Me guío por mis emociones e intuición", types: ["F", "N"] },
      { text: "Consulto con varias personas antes", types: ["E", "F"] },
      { text: "Reflexiono largo tiempo en solitario", types: ["I", "T"] },
    ],
  },
  {
    id: 3,
    question: "En un grupo de trabajo, ¿qué rol adoptas naturalmente?",
    options: [
      { text: "El líder que organiza y motiva al equipo", types: ["E", "J"] },
      { text: "El creativo que aporta ideas innovadoras", types: ["N", "P"] },
      { text: "El analista que evalúa pros y contras", types: ["T", "S"] },
      { text: "El mediador que mantiene la armonía", types: ["F", "I"] },
    ],
  },
  {
    id: 4,
    question: "¿Cómo describes tu forma de comunicarte?",
    options: [
      { text: "Directo y claro, voy al grano siempre", types: ["T", "E"] },
      { text: "Empático y cuidadoso con las palabras", types: ["F", "I"] },
      { text: "Entusiasta y expresivo con todo", types: ["E", "N"] },
      { text: "Reflexivo, pienso antes de hablar", types: ["I", "T"] },
    ],
  },
  {
    id: 5,
    question: "¿Qué te genera más energía?",
    options: [
      { text: "Interactuar con muchas personas", types: ["E"] },
      { text: "Tener tiempo y espacio para mí", types: ["I"] },
      { text: "Lograr metas y superar desafíos", types: ["J", "T"] },
      { text: "Aprender cosas nuevas y explorar ideas", types: ["N", "P"] },
    ],
  },
  {
    id: 6,
    question: "Ante un problema difícil, ¿cuál es tu primer impulso?",
    options: [
      { text: "Buscar soluciones prácticas de inmediato", types: ["T", "S"] },
      { text: "Entender cómo afecta a las personas involucradas", types: ["F"] },
      { text: "Ver el problema desde perspectivas distintas", types: ["N", "P"] },
      { text: "Crear un plan detallado paso a paso", types: ["J", "S"] },
    ],
  },
  {
    id: 7,
    question: "¿Cómo prefieres aprender algo nuevo?",
    options: [
      { text: "Practicando directamente sin teoría previa", types: ["S", "P"] },
      { text: "Estudiando la teoría y el contexto primero", types: ["N", "I"] },
      { text: "Con otras personas en clases o talleres", types: ["E", "F"] },
      { text: "A mi propio ritmo y de forma autodidacta", types: ["I", "T"] },
    ],
  },
  {
    id: 8,
    question: "¿Qué valoras más en una amistad?",
    options: [
      { text: "La honestidad y la sinceridad ante todo", types: ["T"] },
      { text: "La lealtad y el apoyo emocional", types: ["F", "I"] },
      { text: "La diversión y las aventuras compartidas", types: ["E", "P"] },
      { text: "Conversaciones profundas e intelectuales", types: ["N", "I"] },
    ],
  },
  {
    id: 9,
    question: "¿Cómo te sientes con los cambios inesperados?",
    options: [
      { text: "Me adapto fácilmente, me encantan", types: ["P", "N"] },
      { text: "Me generan estrés, prefiero la estabilidad", types: ["J", "S"] },
      { text: "Los analizo antes de reaccionar", types: ["T", "I"] },
      { text: "Busco el apoyo de otros para afrontarlos", types: ["E", "F"] },
    ],
  },
  {
    id: 10,
    question: "¿Qué describe mejor tu entorno ideal de trabajo?",
    options: [
      { text: "Dinámico, con gente y mucha interacción", types: ["E"] },
      { text: "Tranquilo, organizado y con rutinas claras", types: ["I", "J"] },
      { text: "Flexible, creativo y sin demasiadas reglas", types: ["P", "N"] },
      { text: "Estructurado pero con metas desafiantes", types: ["J", "T"] },
    ],
  },
  {
    id: 11,
    question: "Cuando alguien te critica, ¿cómo reaccionas?",
    options: [
      { text: "Lo analizo objetivamente para mejorar", types: ["T"] },
      { text: "Me afecta emocionalmente, lo tomo personal", types: ["F"] },
      { text: "Lo debato si no lo considero justo", types: ["E", "T"] },
      { text: "Reflexiono en privado antes de responder", types: ["I", "N"] },
    ],
  },
  {
    id: 12,
    question: "¿Cuál es tu mayor fortaleza según las personas que te conocen?",
    options: [
      { text: "Mi capacidad de liderazgo e iniciativa", types: ["E", "J"] },
      { text: "Mi creatividad e imaginación", types: ["N", "P"] },
      { text: "Mi empatía y sensibilidad con los demás", types: ["F"] },
      { text: "Mi lógica y capacidad de análisis", types: ["T", "I"] },
    ],
  },
];

const personalityTypes = {
  Visionario: {
    icon: "🌟",
    color: "#7C3AED",
    gradient: "linear-gradient(135deg, #7C3AED, #A78BFA)",
    description:
      "Eres una persona innovadora y llena de ideas. Tu mente está siempre explorando posibilidades y futuros alternativos. Te apasiona el aprendizaje y la transformación, y tienes una capacidad especial para inspirar a los demás con tu visión.",
    strengths: ["Creatividad", "Innovación", "Inspiración", "Pensamiento estratégico"],
    challenges: ["Concretar ideas", "Paciencia con detalles", "Seguir rutinas"],
    careers: ["Emprendimiento", "Diseño", "Consultoría", "Innovación"],
    affirmation: "Tus ideas pueden cambiar el mundo. ¡Confía en tu visión!",
  },
  Líder: {
    icon: "👑",
    color: "#DC2626",
    gradient: "linear-gradient(135deg, #DC2626, #F87171)",
    description:
      "Naciste para guiar. Tienes una energía magnética que atrae a otros naturalmente hacia ti. Eres decisivo, ambicioso y no temes los desafíos. Tu determinación y carisma hacen que las personas confíen en ti.",
    strengths: ["Liderazgo", "Decisión", "Carisma", "Determinación"],
    challenges: ["Delegar tareas", "Escuchar opiniones", "Gestionar el perfeccionismo"],
    careers: ["Dirección ejecutiva", "Política", "Coaching", "Ventas"],
    affirmation: "Tu fuerza interior es tu mayor activo. ¡Lidera con propósito!",
  },
  Empático: {
    icon: "💜",
    color: "#EC4899",
    gradient: "linear-gradient(135deg, #EC4899, #F9A8D4)",
    description:
      "Tu superpoder es conectar con las personas a un nivel profundo. Eres sensible, compasivo y tienes una inteligencia emocional extraordinaria. Eres el apoyo incondicional que todos necesitan y creas relaciones auténticas y duraderas.",
    strengths: ["Empatía", "Escucha activa", "Comprensión", "Conexión humana"],
    challenges: ["Poner límites", "No absorber problemas ajenos", "Tomar decisiones difíciles"],
    careers: ["Psicología", "Educación", "Trabajo social", "Salud"],
    affirmation: "Tu corazón es tu guía más sabia. ¡El mundo necesita tu amor!",
  },
  Analítico: {
    icon: "🔬",
    color: "#0891B2",
    gradient: "linear-gradient(135deg, #0891B2, #67E8F9)",
    description:
      "Tu mente es una máquina de precisión. Analizas todo con detalle y profundidad, buscando siempre la lógica y la eficiencia. Eres el experto al que todos acuden cuando necesitan claridad y soluciones concretas.",
    strengths: ["Análisis", "Lógica", "Precisión", "Resolución de problemas"],
    challenges: ["Expresar emociones", "Tomar decisiones rápidas", "Flexibilidad"],
    careers: ["Ciencia", "Tecnología", "Finanzas", "Ingeniería"],
    affirmation: "Tu mente analítica es un don extraordinario. ¡Úsala para transformar!",
  },
  Explorador: {
    icon: "🧭",
    color: "#059669",
    gradient: "linear-gradient(135deg, #059669, #6EE7B7)",
    description:
      "La vida es una aventura para ti. Eres curioso, adaptable y siempre estás listo para la próxima experiencia. Tu flexibilidad y apertura mental te permiten fluir con los cambios y encontrar oportunidades donde otros ven obstáculos.",
    strengths: ["Adaptabilidad", "Curiosidad", "Energía", "Versatilidad"],
    challenges: ["Comprometerse a largo plazo", "Mantener el enfoque", "La constancia"],
    careers: ["Viajes", "Marketing", "Periodismo", "Startups"],
    affirmation: "Tu espíritu libre es tu mayor fortaleza. ¡Abraza cada nueva aventura!",
  },
};

function calculatePersonality(answers) {
  const scores = { E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 };
  answers.forEach((answer) => {
    if (answer && answer.types) {
      answer.types.forEach((type) => {
        scores[type] = (scores[type] || 0) + 1;
      });
    }
  });

  const totalScore =
    (scores.E || 0) + (scores.I || 0) + (scores.N || 0) + (scores.S || 0) +
    (scores.T || 0) + (scores.F || 0) + (scores.J || 0) + (scores.P || 0);

  const eScore = scores.E || 0;
  const nScore = scores.N || 0;
  const fScore = scores.F || 0;
  const pScore = scores.P || 0;
  const tScore = scores.T || 0;
  const jScore = scores.J || 0;

  const typeScores = {
    Visionario: nScore + pScore,
    Líder: eScore + jScore,
    Empático: fScore + (scores.I || 0),
    Analítico: tScore + (scores.S || 0),
    Explorador: pScore + eScore + nScore,
  };

  let maxType = "Explorador";
  let maxScore = -1;
  Object.entries(typeScores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxType = type;
    }
  });

  return maxType;
}

const ProgressBar = ({ current, total }) => {
  const pct = Math.round((current / total) * 100);
  return (
    <div style={{ marginBottom: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
        <span style={{ fontSize: "0.85rem", color: COLORS.textMuted, fontWeight: 500 }}>
          Pregunta {current} de {total}
        </span>
        <span style={{ fontSize: "0.85rem", color: COLORS.primary, fontWeight: 700 }}>
          {pct}%
        </span>
      </div>
      <div
        style={{
          background: COLORS.border,
          borderRadius: "999px",
          height: "8px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${pct}%`,
            background: COLORS.gradient1,
            height: "100%",
            borderRadius: "999px",
            transition: "width 0.4s ease",
          }}
        />
      </div>
    </div>
  );
};

export default function App() {
  const [screen, setScreen] = useState("welcome"); // welcome | quiz | result
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [result, setResult] = useState(null);
  const [hoveredOption, setHoveredOption] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const handleStart = () => {
    setScreen("quiz");
    setCurrentQ(0);
    setAnswers([]);
    setSelected(null);
  };

  const handleSelect = (option, idx) => {
    if (animating) return;
    setSelected(idx);
  };

  const handleNext = () => {
    if (selected === null || animating) return;
    setAnimating(true);
    const newAnswers = [...answers, questions[currentQ].options[selected]];
    setTimeout(() => {
      setAnswers(newAnswers);
      setSelected(null);
      if (currentQ + 1 >= questions.length) {
        const personality = calculatePersonality(newAnswers);
        setResult(personality);
        setScreen("result");
      } else {
        setCurrentQ(currentQ + 1);
      }
      setAnimating(false);
    }, 350);
  };

  const handleRestart = () => {
    setScreen("welcome");
    setCurrentQ(0);
    setAnswers([]);
    setSelected(null);
    setResult(null);
  };

  // ——— WELCOME SCREEN ———
  if (screen === "welcome") {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: COLORS.gradient2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 1rem",
          fontFamily:
            'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#fff",
              border: `2px solid ${COLORS.border}`,
              borderRadius: "999px",
              padding: "0.4rem 1.2rem",
              marginBottom: "2rem",
              boxShadow: "0 2px 12px rgba(124,58,237,0.08)",
            }}
          >
            <span style={{ fontSize: "1rem" }}>🌸</span>
            <span
              style={{
                fontSize: "0.85rem",
                color: COLORS.primary,
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Test de Personalidad
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              color: COLORS.text,
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Descubre tus{" "}
            <span
              style={{
                background: COLORS.gradient1,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Tipos de Personalidad
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              color: COLORS.textMuted,
              maxWidth: "480px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
            }}
          >
            Responde 12 preguntas y descubre qué tipo de personalidad eres.
            ¡Solo toma 3 minutos!
          </p>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              justifyContent: "center",
              marginBottom: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { icon: "⚡", label: "3 minutos" },
              { icon: "❓", label: "12 preguntas" },
              { icon: "🎯", label: "5 tipos únicos" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  background: "#fff",
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: "12px",
                  padding: "0.5rem 1rem",
                  fontSize: "0.9rem",
                  color: COLORS.text,
                  fontWeight: 600,
                  boxShadow: "0 2px 8px rgba(124,58,237,0.06)",
                }}
              >
                <span>{stat.icon}</span>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={handleStart}
            onMouseEnter={() => setHoveredBtn("start")}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              background:
                hoveredBtn === "start"
                  ? "linear-gradient(135deg, #6D28D9, #DB2777)"
                  : COLORS.gradient1,
              color: "#fff",
              border: "none",
              borderRadius: "16px",
              padding: "1rem 3rem",
              fontSize: "1.15rem",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow:
                hoveredBtn === "start"
                  ? "0 8px 32px rgba(124,58,237,0.4)"
                  : "0 4px 20px rgba(124,58,237,0.3)",
              transform: hoveredBtn === "start" ? "translateY(-2px)" : "translateY(0)",
              transition: "all 0.2s ease",
              letterSpacing: "0.02em",
            }}
          >
            ¡Comenzar Test! →
          </button>
        </div>

        {/* Personality previews */}
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            justifyContent: "center",
            flexWrap: "wrap",
            maxWidth: "540px",
          }}
        >
          {Object.entries(personalityTypes).map(([name, data]) => (
            <div
              key={name}
              style={{
                background: "#fff",
                border: `2px solid ${COLORS.border}`,
                borderRadius: "14px",
                padding: "0.75rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: data.color,
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>{data.icon}</span>
              {name}
            </div>
          ))}
        </div>

        <p style={{ marginTop: "2rem", fontSize: "0.8rem", color: "#C4B5FD" }}>
          © 2024 Test de Personalidad · Tipos de Personalidad
        </p>
      </div>
    );
  }

  // ——— QUIZ SCREEN ———
  if (screen === "quiz") {
    const q = questions[currentQ];
    return (
      <div
        style={{
          minHeight: "100vh",
          background: COLORS.gradient2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 1rem",
          fontFamily:
            'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            background: "#fff",
            borderRadius: "24px",
            padding: "clamp(1.5rem, 5vw, 2.5rem)",
            boxShadow: "0 8px 40px rgba(124,58,237,0.12)",
            border: `1px solid ${COLORS.border}`,
          }}
        >
          {/* Brand */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>🌸</span>
            <span
              style={{
                fontSize: "0.8rem",
                color: COLORS.primary,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Tipos de Personalidad
            </span>
          </div>

          <ProgressBar current={currentQ + 1} total={questions.length} />

          {/* Question */}
          <div
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateX(20px)" : "translateX(0)",
              transition: "all 0.35s ease",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.1rem, 3vw, 1.35rem)",
                fontWeight: 700,
                color: COLORS.text,
                lineHeight: 1.45,
                marginBottom: "1.75rem",
              }}
            >
              {q.question}
            </h2>

            {/* Options */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {q.options.map((option, idx) => {
                const isSelected = selected === idx;
                const isHovered = hoveredOption === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(option, idx)}
                    onMouseEnter={() => setHoveredOption(idx)}
                    onMouseLeave={() => setHoveredOption(null)}
                    style={{
                      background: isSelected
                        ? "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(236,72,153,0.08))"
                        : isHovered
                        ? "rgba(124,58,237,0.04)"
                        : "#FAFAF9",
                      border: isSelected
                        ? `2px solid ${COLORS.primary}`
                        : `2px solid ${isHovered ? COLORS.primaryLight : "#E9D5FF"}`,
                      borderRadius: "14px",
                      padding: "1rem 1.25rem",
                      textAlign: "left",
                      cursor: "pointer",
                      fontSize: "0.95rem",
                      fontWeight: isSelected ? 600 : 500,
                      color: isSelected ? COLORS.primary : COLORS.text,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      transition: "all 0.2s ease",
                      transform: isHovered && !isSelected ? "translateX(4px)" : "none",
                      boxShadow: isSelected
                        ? "0 4px 16px rgba(124,58,237,0.15)"
                        : "none",
                    }}
                  >
                    <span
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        border: isSelected
                          ? `2px solid ${COLORS.primary}`
                          : `2px solid #D1D5DB`,
                        background: isSelected ? COLORS.primary : "transparent",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {isSelected && (
                        <span style={{ color: "#fff", fontSize: "0.75rem" }}>✓</span>
                      )}
                    </span>
                    {option.text}
                  </button>
                );
              })}
            </div>

            {/* Next button */}
            <button
              onClick={handleNext}
              disabled={selected === null}
              onMouseEnter={() => setHoveredBtn("next")}
              onMouseLeave={() => setHoveredBtn(null)}
              style={{
                marginTop: "1.75rem",
                width: "100%",
                background:
                  selected === null
                    ? "#E5E7EB"
                    : hoveredBtn === "next"
                    ? "linear-gradient(135deg, #6D28D9, #DB2777)"
                    : COLORS.gradient1,
                color: selected === null ? "#9CA3AF" : "#fff",
                border: "none",
                borderRadius: "14px",
                padding: "1rem",
                fontSize: "1rem",
                fontWeight: 700,
                cursor: selected === null ? "not-allowed" : "pointer",
                transition: "all 0.2s ease",
                boxShadow:
                  selected !== null && hoveredBtn === "next"
                    ? "0 8px 24px rgba(124,58,237,0.35)"
                    : selected !== null
                    ? "0 4px 16px rgba(124,58,237,0.2)"
                    : "none",
                transform:
                  selected !== null && hoveredBtn === "next"
                    ? "translateY(-1px)"
                    : "none",
              }}
            >
              {currentQ + 1 === questions.length ? "Ver mi resultado 🎯" : "Siguiente →"}
            </button>
          </div>
        </div>

        {/* Back button */}
        <button
          onClick={handleRestart}
          style={{
            marginTop: "1.25rem",
            background: "transparent",
            border: "none",
            color: COLORS.textMuted,
            fontSize: "0.875rem",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          ← Volver al inicio
        </button>
      </div>
    );
  }

  // ——— RESULT SCREEN ———
  if (screen === "result" && result) {
    const personality = personalityTypes[result];
    return (
      <div
        style={{
          minHeight: "100vh",
          background: COLORS.gradient2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "2rem 1rem",
          fontFamily:
            'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
        }}
      >
        <div style={{ width: "100%", maxWidth: "640px" }}>
          {/* Hero card */}
          <div
            style={{
              background: "#fff",
              borderRadius: "28px",
              padding: "2.5rem 2rem",
              textAlign: "center",
              boxShadow: "0 12px 48px rgba(124,58,237,0.15)",
              border: `1px solid ${COLORS.border}`,
              marginBottom: "1.25rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background decoration */}
            <div
              style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "160px",
                height: "160px",
                background: personality.gradient,
                borderRadius: "50%",
                opacity: 0.07,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-30px",
                left: "-30px",
                width: "120px",
                height: "120px",
                background: personality.gradient,
                borderRadius: "50%",
                opacity: 0.05,
              }}
            />

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(124,58,237,0.08)",
                borderRadius: "999px",
                padding: "0.4rem 1rem",
                marginBottom: "1.5rem",
                fontSize: "0.8rem",
                color: COLORS.primary,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              🌸 Tu resultado está aquí
            </div>

            <div
              style={{
                fontSize: "5rem",
                marginBottom: "1rem",
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
              }}
            >
              {personality.icon}
            </div>

            <h1
              style={{
                fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
                fontWeight: 800,
                marginBottom: "0.5rem",
                background: personality.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {result}
            </h1>

            <p
              style={{
                fontSize: "0.9rem",
                color: personality.color,
                fontWeight: 600,
                marginBottom: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Tipo de Personalidad
            </p>

            <p
              style={{
                fontSize: "1rem",
                color: COLORS.textMuted,
                lineHeight: 1.75,
                maxWidth: "480px",
                margin: "0 auto",
              }}
            >
              {personality.description}
            </p>
          </div>

          {/* Affirmation */}
          <div
            style={{
              background: personality.gradient,
              borderRadius: "20px",
              padding: "1.5rem 2rem",
              textAlign: "center",
              marginBottom: "1.25rem",
              boxShadow: `0 4px 20px ${personality.color}33`,
            }}
          >
            <p
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "1.05rem",
                lineHeight: 1.6,
              }}
            >
              ✨ {personality.affirmation}
            </p>
          </div>

          {/* Strengths & Challenges */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.25rem",
              marginBottom: "1.25rem",
            }}
          >
            {/* Fortalezas */}
            <div
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "1.5rem",
                border: `1px solid ${COLORS.border}`,
                boxShadow: "0 4px 16px rgba(124,58,237,0.07)",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: COLORS.text,
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    background: "linear-gradient(135deg,#10B981,#6EE7B7)",
                    borderRadius: "8px",
                    padding: "4px 8px",
                    color: "#fff",
                    fontSize: "0.8rem",
                  }}
                >
                  💪
                </span>
                Fortalezas
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {personality.strengths.map((s) => (
                  <div
                    key={s}
                    style={{
                      background: "rgba(16,185,129,0.08)",
                      border: "1px solid rgba(16,185,129,0.2)",
                      borderRadius: "10px",
                      padding: "0.5rem 0.75rem",
                      fontSize: "0.88rem",
                      color: "#065F46",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <span style={{ color: "#10B981" }}>✓</span> {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Desafíos */}
            <div
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "1.5rem",
                border: `1px solid ${COLORS.border}`,
                boxShadow: "0 4px 16px rgba(124,58,237,0.07)",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: COLORS.text,
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    background: "linear-gradient(135deg,#F59E0B,#FCD34D)",
                    borderRadius: "8px",
                    padding: "4px 8px",
                    color: "#fff",
                    fontSize: "0.8rem",
                  }}
                >
                  🎯
                </span>
                Áreas de Crecimiento
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {personality.challenges.map((c) => (
                  <div
                    key={c}
                    style={{
                      background: "rgba(245,158,11,0.08)",
                      border: "1px solid rgba(245,158,11,0.2)",
                      borderRadius: "10px",
                      padding: "0.5rem 0.75rem",
                      fontSize: "0.88rem",
                      color: "#92400E",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <span style={{ color: "#F59E0B" }}>→</span> {c}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Careers */}
          <div
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "1.5rem",
              border: `1px solid ${COLORS.border}`,
              boxShadow: "0 4px 16px rgba(124,58,237,0.07)",
              marginBottom: "1.25rem",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: COLORS.text,
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  background: personality.gradient,
                  borderRadius: "8px",
                  padding: "4px 8px",
                  color: "#fff",
                  fontSize: "0.8rem",
                }}
              >
                🚀
              </span>
              Caminos Ideales
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.6rem",
              }}
            >
              {personality.careers.map((career) => (
                <span
                  key={career}
                  style={{
                    background: `${personality.color}15`,
                    border: `1.5px solid ${personality.color}40`,
                    borderRadius: "999px",
                    padding: "0.4rem 1rem",
                    fontSize: "0.875rem",
                    color: personality.color,
                    fontWeight: 700,
                  }}
                >
                  {career}
                </span>
              ))}
            </div>
          </div>

          {/* Other personality types */}
          <div
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "1.5rem",
              border: `1px solid ${COLORS.border}`,
              boxShadow: "0 4px 16px rgba(124,58,237,0.07)",
              marginBottom: "1.5rem",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: COLORS.text,
                marginBottom: "1rem",
              }}
            >
              Todos los tipos de personalidad
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {Object.entries(personalityTypes).map(([name, data]) => (
                <div
                  key={name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.6rem 0.75rem",
                    borderRadius: "12px",
                    background: name === result ? `${data.color}10` : "transparent",
                    border: name === result ? `1.5px solid ${data.color}40` : "1.5px solid transparent",
                  }}
                >
                  <span style={{ fontSize: "1.4rem" }}>{data.icon}</span>
                  <span
                    style={{
                      fontWeight: name === result ? 700 : 500,
                      color: name === result ? data.color : COLORS.textMuted,
                      fontSize: "0.9rem",
                    }}
                  >
                    {name}
                  </span>
                  {name === result && (
                    <span
                      style={{
                        marginLeft: "auto",
                        background: data.gradient,
                        color: "#fff",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        padding: "0.2rem 0.6rem",
                        borderRadius: "999px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Tú
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Restart button */}
          <button
            onClick={handleRestart}
            onMouseEnter={() => setHoveredBtn("restart")}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              width: "100%",
              background:
                hoveredBtn === "restart"
                  ? "linear-gradient(135deg, #6D28D9, #DB2777)"
                  : COLORS.gradient1,
              color: "#fff",
              border: "none",
              borderRadius: "16px",
              padding: "1.1rem",
              fontSize: "1rem",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow:
                hoveredBtn === "restart"
                  ? "0 8px 32px rgba(124,58,237,0.4)"
                  : "0 4px 20px rgba(124,58,237,0.25)",
              transform: hoveredBtn === "restart" ? "translateY(-2px)" : "none",
              transition: "all 0.2s ease",
              marginBottom: "1rem",
            }}
          >
            🔄 Hacer el test de nuevo
          </button>

          <p
            style={{
              textAlign: "center",
              fontSize: "0.8rem",
              color: "#C4B5FD",
              marginBottom: "2rem",
            }}
          >
            © 2024 Test de Personalidad · Tipos de Personalidad
          </p>
        </div>
      </div>
    );
  }

  return null;
}