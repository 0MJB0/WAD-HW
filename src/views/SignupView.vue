<template>
    <main class="center">
        <form class="card signup" novalidate @submit.prevent="signup">
            <h1>Create an account</h1>

            <div class="form-row">
                <label for="email">Email</label>
                <input id="email" v-model.trim="email" type="email" placeholder="Email" required>
            </div>

            <div class="form-row">
                <label for="password">Password</label>
                <input id="password" v-model="password" type="password" placeholder="Password" required>
            </div>

            <!-- shown only after the user pressed Signup -->
            <div v-if="submitted && failedRules.length" class="message invalid">
                <p v-for="rule in failedRules" :key="rule">
                    The password is not valid - {{ rule }}
                </p>
            </div>
            <p v-if="submitted && !emailValid" class="message invalid">
                Please enter a valid email address.
            </p>
            <p v-if="success" class="message valid">
                Signup successful! Welcome, {{ email }}.
            </p>

            <button type="submit" class="btn">Signup</button>
        </form>
    </main>
</template>

<script>
// every condition has a text and a test; the test returns true when the condition is satisfied
const PASSWORD_RULES = [
    {
        text: "Must be at least 8 characters and less than 15 characters",
        test: (pw) => pw.length >= 8 && pw.length < 15
    },
    {
        text: "Includes at least one uppercase alphabet character",
        test: (pw) => /[A-Z]/.test(pw)
    },
    {
        text: "Includes at least two lowercase alphabet characters",
        test: (pw) => (pw.match(/[a-z]/g) || []).length >= 2
    },
    {
        text: "Includes at least one numeric value",
        test: (pw) => /[0-9]/.test(pw)
    },
    {
        text: "Should start with an uppercase letter",
        test: (pw) => /^[A-Z]/.test(pw)
    },
    {
        text: "Should include the character \"_\"",
        test: (pw) => pw.includes("_")
    }
];

export default {
    name: "SignupView",
    data() {
        return {
            email: "",
            password: "",
            submitted: false,
            success: false
        };
    },
    computed: {
        // texts of the conditions the current password does NOT satisfy
        failedRules() {
            return PASSWORD_RULES
                .filter((rule) => !rule.test(this.password))
                .map((rule) => rule.text);
        },
        emailValid() {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
        }
    },
    watch: {
        // hide the success message again when the user edits the form
        email() {
            this.success = false;
        },
        password() {
            this.success = false;
        }
    },
    methods: {
        signup() {
            this.submitted = true;
            this.success = this.failedRules.length === 0 && this.emailValid;
        }
    }
};
</script>

<style scoped>
.center {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 10px;
    background-color: #c9d9ea;
    border-radius: 8px;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    width: 100%;
    max-width: 400px;
    padding: 20px;
    background-color: #eef3e2;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h1 {
    margin: 0;
    font-size: 1.1rem;
}

.form-row {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
}

.form-row label {
    width: 80px;
    text-align: right;
}

.form-row input {
    flex: 1;
    min-width: 0;
    padding: 8px 10px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-family: inherit;
}

.form-row input:focus {
    outline: none;
    border-color: #1f4e79;
}

.message {
    width: 100%;
    margin: 0;
    padding: 8px;
    font-size: 0.85rem;
    border-radius: 6px;
}

.message p {
    margin: 2px 0;
}

.invalid {
    color: #a40000;
    background-color: #f6dada;
}

.valid {
    color: #1d6b1d;
    background-color: #d8f0d8;
}

.btn {
    border-radius: 14px;
    padding: 6px 22px;
}

@media (max-width: 600px) {
    .form-row {
        flex-direction: column;
        align-items: stretch;
    }

    .form-row label {
        width: auto;
        text-align: left;
    }
}
</style>
